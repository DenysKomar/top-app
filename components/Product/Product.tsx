import React, { ForwardedRef, forwardRef, useRef, useState } from 'react'
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
import {motion} from 'framer-motion'

const Product = motion(forwardRef(({product,className,...props}:ProductProps,ref:ForwardedRef<HTMLDivElement>):JSX.Element=> {
  const [isReviewOpened,setIsReviewOpened] = useState(false) 
  const reviewRef = useRef<HTMLDivElement>(null)

  const variants = {
    visible: {
      opacity:1,
      height:'auto'
    },
    hidden: {
      opacity: 0,
      height:0
    }
  }
  
  const scrollToReview =()=> {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
    reviewRef.current?.focus()
  }
  
  return (
  <div className={className} {...props} ref={ref}>
    <Card className={styles.product}>
        <div className={styles.logo}>
        <img  src={process.env.NEXT_PUBLIC_DOMAIN + product.image}  alt={product.title} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}><span><span className='visualyHidden'>цена</span> {priceRu(product.price)}</span>
         {product.oldPrice && <Tag className={styles.oldPrice} color="green"><span  className='visualyHidden'>скидка</span>{priceRu(product.price - product.oldPrice)}</Tag>}</div>
        <div className={styles.credit}><span><span className='visualyHidden'>кредит</span> {priceRu(product.credit)}/</span><span className={styles.month}>мес</span></div>
        <div className={styles.rating}>
        <span  className='visualyHidden'>{"рейтинг" + (product.reviewAvg ?? product.initialRating) }</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
        <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}</div>
        <div className={styles.priceTitle} aria-hidden={true}>Цена</div>
        <div className={styles.creditTitle} aria-hidden={true}>Кредит</div>
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
            <Button aria-expanded={isReviewOpened} appearance='ghost' arrow={isReviewOpened ? 'down' :'right'} className={styles.reviewButton} onClick={()=> setIsReviewOpened(!isReviewOpened)}>Читать отзывы</Button>

          </div>
        
        

    </Card>
  
    <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial="hidden">
    <Card color="blue" className={styles.review} ref={reviewRef} tabIndex={isReviewOpened ? 0 :-1}>
       { product.reviewAvg && product.reviews.map(r=> 
        (     
          <div key={r._id}>
              <Review review={r}/>
              <Divider />
          </div>
        )
      )}
      <ReviewForm productId={product._id} isOpened={isReviewOpened} />
    </Card>
    </motion.div>
    </div>
  )
}))

export default Product