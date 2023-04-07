import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const InputElement = styled.input`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    outline: none;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.dark_gray};

    &::placeholder {
      color: ${theme.colors.light_gray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
