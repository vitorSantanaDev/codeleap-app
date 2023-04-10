import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    width: 8rem;
    height: 8rem;

    div {
      position: absolute;
      top: 3.3rem;
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
      left: 0.8rem;
      animation: lds-ellipsis1 0.6s infinite;
    }
    div:nth-child(2) {
      left: 0.8rem;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(3) {
      left: 3.2rem;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(4) {
      left: 5.6rem;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(2.4rem, 0);
      }
    }
  `}
`
