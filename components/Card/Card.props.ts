import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'

export default interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    color?: 'white' | 'blue',
    children: ReactNode;
}