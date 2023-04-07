import { TextareaHTMLAttributes } from 'react'

export type TextAreaInputProps = {
  label?: string
  initialValue?: string
  handleChange?: (value: string) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>
