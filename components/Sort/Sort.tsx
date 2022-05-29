import React from 'react'
import cn from 'classnames'
import styles from './Sort.module.css'
import SortProps, { SortEnum } from './Sort.props'
import SortIcon from '../../public/Sort.svg'

const Sort = ({sort,setSort,className,...props}:SortProps):JSX.Element=> {
  return (
    <div className={cn(styles.sort, className)} {...props}>
        <span onClick={()=> setSort(SortEnum.Rating)}
              className={cn({
                [styles.active] : sort == SortEnum.Rating
              })}
        >
            <SortIcon className={styles.sortIcon} /> По рейтингу
        </span>
        <span onClick={()=> setSort(SortEnum.Prise)}
              className={cn({
                [styles.active] : sort == SortEnum.Prise
              })}
        >
            <SortIcon className={styles.sortIcon}  /> По&nbsp;Цене
        </span>
    </div>
  )
}

export default Sort