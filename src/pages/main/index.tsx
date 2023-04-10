import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import Feed from 'components/Feed'
import Modal from 'components/Modal'
import Header from 'components/Header'
import Button from 'components/Button'
import Loading from 'components/Loading'
import Heading from 'components/Heading'
import EditForm from 'components/EditForm'
import { Post } from 'components/PostCard/types'
import CreationForm from 'components/CreationForm'
import { ButtonWrapper } from 'components/Layouts/BaseFormLayout'

import { useInView } from 'react-intersection-observer'
import { useStateSelector } from 'hooks/useStateSelector'
import { toggleDeletePostAlert } from 'redux/actions/delete-post-slice'
import { useFetchPosts, useMutationDeletePost } from 'services/post.services'

import * as S from './styles'

const MainPage = () => {
  const dispatch = useDispatch()

  const [offsetPosts, setOffsetPosts] = useState(0)
  const { ref, inView } = useInView()

  const {
    isLoading,
    isRefetching,
    data: fetchPostsData,
    refetch: refetchPostsData
  } = useFetchPosts({ offset: offsetPosts })

  const [postsData, setPostsData] = useState<Post[]>([])

  const { mutateAsync: deletePostMutation } = useMutationDeletePost()

  const showEditPostModal = useStateSelector(
    (state) => state.editPostModal.visible
  )
  const showDeletePostAlert = useStateSelector(
    (state) => state.deletePostAlert.visible
  )

  const postIdToDelete = useStateSelector(
    (state) => state.deletePostAlert.postID
  )

  const handleDeletePost = async () => {
    if (postIdToDelete) {
      await deletePostMutation({ postID: postIdToDelete })
      dispatch(toggleDeletePostAlert(null))
      await refetchPostsData()
      toast.success('Post successfully deleted')
    }
  }

  useEffect(() => {
    if (inView) setOffsetPosts((prevState) => (prevState += 10))
  }, [inView])

  useEffect(() => {
    if (fetchPostsData && fetchPostsData) {
      setPostsData((prevState) => [...fetchPostsData, ...prevState])
    }
  }, [fetchPostsData])

  useEffect(() => {
    ;(async () => await refetchPostsData())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetPosts])

  return (
    <S.Wrapper>
      <Header>CodeLeap Network</Header>
      <S.Container>
        <S.FormCreationWrapper>
          <CreationForm refetchPostsData={refetchPostsData} />
        </S.FormCreationWrapper>

        <S.FeedWrapper>
          {isLoading && !isRefetching ? (
            <Loading />
          ) : postsData.length ? (
            <Feed
              ref={ref}
              posts={postsData}
              isRefetchingPostsData={isRefetching}
            />
          ) : null}
        </S.FeedWrapper>
      </S.Container>
      {showEditPostModal && (
        <Modal isVisible={showEditPostModal}>
          <EditForm refetchPostsData={refetchPostsData} />
        </Modal>
      )}

      {showDeletePostAlert && (
        <Modal isVisible={showDeletePostAlert}>
          <S.AlertDeletePost>
            <Heading size="xlarge">
              Are you sure you want to delete this item?
            </Heading>
            <ButtonWrapper>
              <Button
                bgColor="white"
                onClick={() => dispatch(toggleDeletePostAlert(null))}
              >
                Cancel
              </Button>
              <Button onClick={handleDeletePost} bgColor="red">
                Delete
              </Button>
            </ButtonWrapper>
          </S.AlertDeletePost>
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default MainPage
