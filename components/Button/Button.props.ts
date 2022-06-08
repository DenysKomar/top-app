import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ButtonProps extends 
Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'onAnimatedStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'|'ref'> {
    children:ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}