import React, { useState } from 'react'
import { TextInputProps } from './types'

import * as S from './styles'

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  handleChange,
  initialValue = '',
  ...restProps
}) => {
  const [value, setValue] = useState(initialValue)

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!handleChange && handleChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputElement
        type="text"
        name={name}
        value={value}
        onChange={onChangeInput}
        {...(label ? { id: name } : {})}
        {...restProps}
      />
    </S.Wrapper>
  )
}

export default TextInput
