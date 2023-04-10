import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    padding: calc(${theme.spacings.small} + 0.3rem)
      calc(${theme.spacings.medium} + 0.5rem);
    background-color: ${theme.colors.primary};
    font-size: calc(${theme.font.sizes.xlarge} + 0.2rem);
  `}
`

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: ${theme.grid.container};
  `}
`
