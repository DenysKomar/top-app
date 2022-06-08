import React from 'react'
import cn from 'classnames'
import styles from './Sort.module.css'
import SortProps, { SortEnum } from './Sort.props'
import SortIcon from '../../public/Sort.svg'

const Sort = ({sort,setSort,className,...props}:SortProps):JSX.Element=> {
  return (
    <div className={cn(styles.sort, className)} {...props}>
        <span onClick={()=> setSort(SortEnum.Rating)}
         onKeyDown={(key)=> {if(key.code == "Enter" || key.code == "Space") {setSort(SortEnum.Rating)}}}
              tabIndex={0}
              className={cn({
                [styles.active] : sort == SortEnum.Rating
              })}
        >
            <SortIcon className={styles.sortIcon} /> По рейтингу
        </span>
        <span onClick={()=> setSort(SortEnum.Price)}
        onKeyDown={(key)=> {if(key.code == "Enter" || key.code == "Space") {setSort(SortEnum.Price)}}}
              tabIndex={0}
              className={cn({
                [styles.active] : sort == SortEnum.Price
              })}
        >
            <SortIcon className={styles.sortIcon}  /> По&nbsp;Цене
        </span>
    </div>
  )
}

export default Sort