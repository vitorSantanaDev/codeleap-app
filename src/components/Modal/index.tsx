import React from 'react'

import { ModalProps } from './types'

import * as S from './styles'

const Modal: React.FC<ModalProps> = ({ children, isVisible }) => {
  return (
    <S.Wrapper
      aria-label="modal"
      role="presentation"
      isVisible={isVisible}
      aria-hidden={!isVisible}
    >
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Modal
