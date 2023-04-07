import React from 'react'

import { ButtonProps } from './types'

import * as S from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  bgColor = 'primary',
  ...restProps
}) => {
  return (
    <S.Wrapper bgColor={bgColor} {...restProps}>
      {children}
    </S.Wrapper>
  )
}

export default Button
