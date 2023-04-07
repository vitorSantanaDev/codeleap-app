import React from 'react'

import { HeaderProps } from './types'

import * as S from './styles'

const Header: React.FC<HeaderProps> = ({ children, ...restProps }) => {
  return <S.Wrapper {...restProps}>{children}</S.Wrapper>
}

export default Header
