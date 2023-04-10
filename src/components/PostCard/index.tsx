import React from 'react'
import { formatISO } from 'date-fns'
import { useDispatch } from 'react-redux'

import { PostCardProps } from './types'

import Header from 'components/Header'

import EditIcon from 'assets/icons/bx_bx-edit.svg'
import TrashIcon from 'assets/icons/delete-icon.svg'

import { toggleEditPostModal } from 'redux/actions/edit-post-slice'
import { rangeOfTimePassedBetweenTwoDates } from 'utils/formatDate'
import { toggleDeletePostAlert } from 'redux/actions/delete-post-slice'

import * as S from './styles'

const PostCard: React.FC<PostCardProps> = ({ myPost, post }) => {
  const dispatch = useDispatch()

  const postTimeLabel = rangeOfTimePassedBetweenTwoDates(
    post.created_datetime,
    formatISO(new Date())
  )

  return (
    <S.Wrapper>
      <Header>
        <S.HeaderContent>
          <p>{post.title}</p>
          {!!myPost && (
            <S.ActionButtonsWrapper>
              <img
                role="button"
                src={TrashIcon}
                alt="Trash icon"
                aria-label="Trash icon"
                onClick={() => dispatch(toggleDeletePostAlert(post.id))}
              />
              <img
                role="button"
                src={EditIcon}
                alt="Edit icon"
                aria-label="Edit icon"
                onClick={() => dispatch(toggleEditPostModal(post.id))}
              />
            </S.ActionButtonsWrapper>
          )}
        </S.HeaderContent>
      </Header>
      <S.Content>
        <S.PostInfoWrapper>
          <S.UserNameText>@{post.username}</S.UserNameText>
          <S.PostTimeText>{postTimeLabel}</S.PostTimeText>
        </S.PostInfoWrapper>
        <S.Description>{post.content}</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default PostCard
