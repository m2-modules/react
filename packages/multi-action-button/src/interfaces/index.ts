import { MouseEvent } from 'react'

export interface ButtonIcon {
  alt: string
  src: string
  width: string
  height: string
}
export interface SubButton {
  icon?: ButtonIcon | JSX.Element
  name: string
  action: <T>(args: MouseEvent<HTMLButtonElement>) => T
}

export interface MultiActionButtonProps {
  name: string
  icon?: ButtonIcon | JSX.Element
  rippleColor?: string
  reverse?: boolean
  dropdown?: boolean
  moreButtonIcon?: ButtonIcon | JSX.Element
  action: <T>(event: MouseEvent<HTMLButtonElement>) => T
  subButtons?: SubButton[]
}
