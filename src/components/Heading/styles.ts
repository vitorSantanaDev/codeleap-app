import styled, { css } from 'styled-components'
import { HeadingProps } from './types'

type WrapperProps = Pick<HeadingProps, 'color' | 'size'>

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.bold};
    font-size: calc(${theme.font.sizes[size!]} + 0.2rem);
  `}
`
