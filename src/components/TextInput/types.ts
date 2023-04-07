import { InputHTMLAttributes } from 'react'

export type TextInputProps = {
  label?: string
  disabled?: boolean
  initialValue?: string
  handleChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>
