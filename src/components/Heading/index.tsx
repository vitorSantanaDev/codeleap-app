import React from 'react'

import { HeadingProps } from './types'

import * as S from './styles'

const Heading: React.FC<HeadingProps> = ({
  children,
  color = 'black',
  size = 'medium'
}) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
