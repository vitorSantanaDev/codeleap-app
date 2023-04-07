import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonBgColor = 'primary' | 'green' | 'red' | 'white'

export type ButtonProps = {
  children: ReactNode
  minimal?: boolean
  bgColor?: ButtonBgColor
} & ButtonHTMLAttributes<HTMLButtonElement>
