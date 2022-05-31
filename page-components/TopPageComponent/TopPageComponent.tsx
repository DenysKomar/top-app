import React, { useReducer } from 'react'
import Htag from '../../components/Htag/Htag'
import Tag from '../../components/Tag/Tag'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import HhData from '../../components/HhData/HhData'
import { TopLevelCategory } from '../../interfaces/page.interface'
import Advantages from '../../components/Advantages/Advantages'
import Ptag from '../../components/Ptag/Ptag'
import Sort from '../../components/Sort/Sort'
import { SortEnum } from '../../components/Sort/Sort.props'
import { SortReducer } from './sort.reducer'
import Product from '../../components/Product/Product'

const TopPageComponent = ({page,products,firstCategory}:TopPageComponentProps):JSX.Element => {
  const [{products:sortedProducts,sort},dispatchSort] = useReducer(SortReducer, {products, sort:SortEnum.Rating})
  const setSort = (sort:SortEnum) => {
    dispatchSort({type:sort})
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1' >
            {page.title}
        </Htag>
        {products && <Tag color="grey" size="medium">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}></Sort>
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p} />))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2' >
           Вакансии - {page.category}
        </Htag>
        <Tag color="red" size="medium">hh.ru</Tag>
      
      </div>
     {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>} 
     {page.advantages && page.advantages.length > 0 && <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <Htag tag='h2'>Получаемый навыки</Htag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  )
}

export default TopPageComponent