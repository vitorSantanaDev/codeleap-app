import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main``

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.small};
  `}
`

export const FormCreationWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
  `}
`

export const FeedWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const AlertDeletePost = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
