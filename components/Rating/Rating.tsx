import React, {useState,useEffect} from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import { RatingProps } from './Rating.props'
import Star from './star.svg'

const Rating = ({isEditable = false,rating,setRating, ...props}:RatingProps):JSX.Element => {
    const [ratingArray,setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(()=> {
        constructRating(rating)
    },[rating])

    const constructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i:number) => {
            return (
                <span key={i} 
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={()=>changeDisplay(rating)}
                onClick={()=>saveRating(i+1)}
                 >
                    <Star 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable = true
                    })} 
                    tabIndex= {isEditable?0:-1}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray)
    }

    const changeDisplay = (i: number) => {
        if(!isEditable ) {
            return
        }
        constructRating(i)
    }
    const saveRating = (i:number) => {
        if(!isEditable || !setRating) {
            return
        }
        setRating(i)
    }
  return (
    <div {...props}>
        {ratingArray.map((r,i)=> (<span key={i}>{r}</span>))}
    </div>
  )
}

export default Rating