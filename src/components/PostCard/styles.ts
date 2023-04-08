import styled, { css } from 'styled-components'

import * as HeaderStyles from 'components/Header/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeaderStyles.Wrapper} {
      border-top-right-radius: ${theme.border.radius};
      border-top-left-radius: ${theme.border.radius};
    }

    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    border-radius: ${theme.border.radius};
  `}
`

export const HeaderContent = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const ActionButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};

    img {
      cursor: pointer;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const PostInfoWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const UserNameText = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.dark_gray};
    font-size: calc(${theme.font.sizes.medium} + 0.2rem);
  `}
`

export const PostTimeText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.dark_gray};
    font-size: calc(${theme.font.sizes.medium} + 0.2rem);
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.normal};
    font-size: calc(${theme.font.sizes.medium} + 0.2rem);
  `}
`
