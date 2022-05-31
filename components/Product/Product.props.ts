import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'
import { ProductsModel } from '../../interfaces/product.interface';

export default interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    product:ProductsModel;
}