import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'
import { ReviewModal } from '../../interfaces/product.interface'

export default interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
        productId:string;
        isOpened:boolean
}