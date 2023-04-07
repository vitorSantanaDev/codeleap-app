import styled, { css } from 'styled-components'
import { ModalProps } from './types'
import media from 'styled-media-query'

export type WrapperProps = Pick<ModalProps, 'isVisible'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isVisible }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;

    z-index: ${theme.layers.modal};
    opacity: ${isVisible ? '1' : '0'};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isVisible ? 'all' : 'none'};
    background-color: ${theme.colors.overlay_color};

    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
      padding: 0px ${theme.spacings.small};
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 66rem;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
  `}
`
