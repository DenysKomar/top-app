import React from 'react'
import cn from 'classnames'
import styles from './HhData.module.css'
import HhDataProps from './HhData.props'
import Card from '../Card/Card'
import Rate from '../../public/Rate.svg'
import { priceRu } from '../../helpers/helpers'

const HhData = ({count,juniorSalary,middleSalary,seniorSalary}:HhDataProps):JSX.Element=> {
  return (
    <div className={styles.hh}>
    <Card className={styles.count}>
        <div className={styles.title}>Всего ваканский </div>
        <div className={styles.countValue}>{count}</div>
    </Card>
    <Card className={styles.salary}>
      <div>
        <div className={styles.title}>Начальный</div>
        <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
        <div className={styles.rate}>
        <Rate className={styles.filled}/>
        <Rate/>
        <Rate/></div>
      </div>
      <div>
        <div className={styles.title}>Средний </div>
        <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
        <div className={styles.rate}>
        <Rate className={styles.filled}/>
        <Rate className={styles.filled}/>
        <Rate/>
      </div>
      </div>
      <div>
        <div className={styles.title}>Професионал </div>
        <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
        <div className={styles.rate}>
        <Rate className={styles.filled}/>
        <Rate className={styles.filled}/>
        <Rate className={styles.filled}/>
        </div>
      </div>
        
    </Card>
</div>
  )
}

export default HhData