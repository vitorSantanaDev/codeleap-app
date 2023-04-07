import React from 'react'
import { formatISO } from 'date-fns'

import { PostCardProps } from './types'

import Header from 'components/Header'

import EditIcon from 'assets/icons/bx_bx-edit.svg'
import TrashIcon from 'assets/icons/delete-icon.svg'

import { rangeOfTimePassedBetweenTwoDates } from 'utils/formatDate'

import * as S from './styles'

const PostCard: React.FC<PostCardProps> = ({ myPost, post }) => {
  const postTimeLabel = rangeOfTimePassedBetweenTwoDates(
    post.created_datetime,
    formatISO(new Date())
  )

  return (
    <S.Wrapper>
      <Header>
        <S.HeaderContent>
          <span>{post.title}</span>
          {!!myPost && (
            <S.ActionButtonsWrapper>
              <img role="button" src={TrashIcon} alt="Trash icon" />
              <img role="button" src={EditIcon} alt="Edit icon" />
            </S.ActionButtonsWrapper>
          )}
        </S.HeaderContent>
      </Header>
      <S.Content>
        <S.PostInfoWrapper>
          <S.UserNameText>{post.username}</S.UserNameText>
          <S.PostTimeText>{postTimeLabel}</S.PostTimeText>
        </S.PostInfoWrapper>
        <S.Description>{post.content}</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default PostCard
