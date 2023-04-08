import React from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import Feed from 'components/Feed'
import Modal from 'components/Modal'
import Header from 'components/Header'
import Button from 'components/Button'
import Loading from 'components/Loading'
import Heading from 'components/Heading'
import EditForm from 'components/EditForm'
import CreationForm from 'components/CreationForm'
import { ButtonWrapper } from 'components/Layouts/BaseFormLayout'

import { useStateSelector } from 'hooks/useStateSelector'
import { toggleDeletePostAlert } from 'redux/actions/delete-post-slice'
import { useGetAllPosts, useMutationDeletePost } from 'services/post.services'

import * as S from './styles'

const MainPage = () => {
  const dispatch = useDispatch()
  const {
    isRefetching,
    data: postsData,
    refetch: refetchPostsData,
    isLoading: isLoadingPostsData
  } = useGetAllPosts()

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
      toast.success('Post successfully deleted')
      refetchPostsData()
    }
  }

  return (
    <S.Wrapper>
      <Header>CodeLeap Network</Header>
      <S.Container>
        <S.FormCreationWrapper>
          <CreationForm refetchPostsData={refetchPostsData} />
        </S.FormCreationWrapper>

        <S.FeedWrapper>
          {isLoadingPostsData || isRefetching ? (
            <Loading />
          ) : postsData?.length ? (
            <Feed posts={postsData} />
          ) : null}
        </S.FeedWrapper>
      </S.Container>
      {showEditPostModal && (
        <Modal isVisible={showEditPostModal}>
          <EditForm />
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
