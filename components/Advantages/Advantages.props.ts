import {ReactNode,DetailedHTMLProps,HTMLAttributes} from 'react'
import { HhData, TopPageAdvantage } from '../../interfaces/page.interface';

export default interface AdvantagesProps extends HhData {
    advantages:TopPageAdvantage[]
}