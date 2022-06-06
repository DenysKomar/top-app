import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import UpIcon from '../../public/UpIcon.svg'
import CrossClose from '../../public/CrossClose.svg'
import Menu from '../../public/burgermenu.svg'

export const icons = {
    UpIcon,
    CrossClose,
    Menu,
}
export type IconName = keyof typeof icons

export default interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white';
    icon:IconName
}