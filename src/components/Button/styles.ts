import styled, { css } from 'styled-components'
import { ButtonBgColor } from './types'
import { darken, lighten } from 'polished'

type WrapperProps = { bgColor: ButtonBgColor }

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, bgColor }) => css`
    cursor: pointer;
    padding: 0.6rem 2.7rem;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors[bgColor]};
    color: ${bgColor === 'white' ? theme.colors.black : theme.colors.white};
    transition: ${theme.transition.default};

    &:hover {
      color: ${lighten(0.1, theme.colors[bgColor])};
    }

    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }

    ${bgColor === 'white'
      ? css`
          border: 1px solid ${theme.colors.gray};
          &:hover {
            color: ${darken(0.5, theme.colors[bgColor])};
          }
        `
      : css`
          border: none;
          &:hover {
            color: ${lighten(0.1, theme.colors[bgColor])};
          }
        `}
  `}
`
