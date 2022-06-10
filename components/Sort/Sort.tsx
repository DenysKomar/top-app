import React from 'react'
import cn from 'classnames'
import styles from './Sort.module.css'
import SortProps, { SortEnum } from './Sort.props'
import SortIcon from '../../public/Sort.svg'

const Sort = ({sort,setSort,className,...props}:SortProps):JSX.Element=> {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id='sort'>Сортировка</div>
        <span onClick={()=> setSort(SortEnum.Rating)}
        id="rating"
         onKeyDown={(key)=> {if(key.code == "Enter" || key.code == "Space") {setSort(SortEnum.Rating)}}}
              tabIndex={0}
              className={cn({
                [styles.active] : sort == SortEnum.Rating
              })}
              aria-selected={sort == SortEnum.Rating}
              aria-labelledby="sort rating"
        >
            <SortIcon className={styles.sortIcon} /> По рейтингу
        </span>
        <span onClick={()=> setSort(SortEnum.Price)}
        id="price"
        onKeyDown={(key)=> {if(key.code == "Enter" || key.code == "Space") {setSort(SortEnum.Price)}}}
              tabIndex={0}
              className={cn({
                [styles.active] : sort == SortEnum.Price
              })}
              aria-selected={sort == SortEnum.Price}
              aria-labelledby="sort price"
        >
            <SortIcon className={styles.sortIcon}  /> По&nbsp;Цене
        </span>
    </div>
  )
}

export default Sort