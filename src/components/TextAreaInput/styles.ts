import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const TextAreaElement = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    resize: none;
    outline: none;
    height: 7.4rem;
    display: block;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
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
