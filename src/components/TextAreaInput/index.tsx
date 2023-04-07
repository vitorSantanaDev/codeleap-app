import React, { useState } from 'react'
import { TextAreaInputProps } from './types'

import * as S from './styles'

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  name,
  label,
  handleChange,
  initialValue = '',
  ...restProps
}) => {
  const [value, setValue] = useState(initialValue)

  const onChangeTextAreaInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!handleChange && handleChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.TextAreaElement
        name={name}
        value={value}
        {...restProps}
        {...(label ? { id: name } : {})}
        onChange={onChangeTextAreaInput}
      />
    </S.Wrapper>
  )
}

export default TextAreaInput
