import { InputHTMLAttributes } from 'react'

export type TextInputProps = {
  label?: string
  initialValue?: string
  handleChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>
