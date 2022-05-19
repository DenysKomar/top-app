import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'

export default interface IPtag extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size: '18' | '14' | '16';
    children: ReactNode;
}