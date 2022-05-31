import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'

export default interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    sort:SortEnum;
    setSort: (sort:SortEnum) => void;
}

export enum SortEnum {
    Rating,
    Price
}