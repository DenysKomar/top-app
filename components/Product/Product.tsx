import React, { useRef, useState } from 'react'
import cn from 'classnames'
import styles from './Product.module.css'
import ProductProps from './Product.props'
import Card from '../Card/Card'
import Rating from '../Rating/Rating'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import { declOfNum, priceRu } from '../../helpers/helpers'
import Divider from '../Divider/Divider'
import Image from 'next/image'
import Review from '../Review/Review'
import ReviewForm from '../ReviewForm/ReviewForm'

const Product = ({product,className,...props}:ProductProps):JSX.Element=> {
  const [isReviewOpened,setIsReviewOpened] = useState(false) 
  const reviewRef = useRef<HTMLDivElement>(null)
  
  const scrollToReview =()=> {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  }
  
  return (
  <div className={className} {...props}>
    <Card className={styles.product}>
        <div className={styles.logo}>
        <img  src={process.env.NEXT_PUBLIC_DOMAIN + product.image}  alt={product.title} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>{priceRu(product.price)}
         {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}</div>
        <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>мес</span></div>
        <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
        <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}</div>
        <div className={styles.priceTitle}>Цена</div>
        <div className={styles.creditTitle}>Кредит</div>
        <div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewsCount} {declOfNum(product.reviewsCount, ['отзыв',' отзыва', 'отзывов'])} </a></div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map( c => (
            <div className={styles.characteristics} key={c.name}>
                <span className={styles.characteristicsName}> {c.name} </span>
                <span className={styles.characteristicsDots}> </span>
                <span className={styles.characteristicsValue}> {c.value} </span>
            </div>  
          ))}
        </div>
        <div className={styles.advBlock}>
        {product.advantage && <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div> {product.advantage}</div>
            </div>}
            {product.disadvantage && <div className={styles.disadvantages}> 
                <div className={styles.advBlock}>Недостатки</div>
                <div>{product.disadvantage}</div>
            </div>}
        </div>
        <Divider className={cn(styles.hr,styles.hr2)} />
          <div className={styles.actions}>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button appearance='ghost' arrow={isReviewOpened ? 'down' :'right'} className={styles.reviewButton} onClick={()=> setIsReviewOpened(!isReviewOpened)}>Читать отзывы</Button>

          </div>
        
        

    </Card>
  
     
    <Card color="blue" className={cn(styles.review, {
      [styles.opened] : isReviewOpened,
      [styles.closed] : !isReviewOpened
    })} ref={reviewRef}>
       { product.reviewAvg ? product.reviews.map(r=> 
        (     
          <div key={r._id}>
              <Review review={r}/>
              <Divider />
          </div>
        )
      ): " Отзывов нет"}
      <ReviewForm productId={product._id} />
    </Card>
    </div>
  )
}

export default Product