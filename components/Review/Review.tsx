import React from 'react'
import ReviewProps from './Review.props'
import cn from 'classnames'
import styles from './Review.module.css'
import UserIcon from '../../public/user.svg'
import {format} from 'date-fns'
import Rating from '../Rating/Rating'

const Review = ({className,review,...props}:ReviewProps):JSX.Element=> {
  const {name,title,description,createdAt ,rating} = review
  return (
    <div className={styles.review}
    {...props}>
        <UserIcon className={styles.user}/>
        <div className={styles.title}>
          <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
          <span>{title}</span>
        </div>
        <div className={styles.date}>
             {format(new Date(createdAt), 'dd MMMM yyyy')} 
        </div>
        <div className={styles.rating}>
            <Rating rating={rating}/>
        </div>
        <div className={styles.description}>
            {description}
        </div>
    </div>
  )
}

export default Review