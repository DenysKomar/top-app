import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'
import { ReviewModal } from '../../interfaces/product.interface'

export default interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
        review:ReviewModal;
}