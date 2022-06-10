import React, {useState,useEffect, forwardRef, ForwardedRef, useRef} from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import { RatingProps } from './Rating.props'
import Star from './star.svg'

const Rating = forwardRef(({error,isEditable = false,rating,setRating,tabIndex, ...props}:RatingProps ,ref:ForwardedRef<HTMLDivElement>):JSX.Element => {
    const [ratingArray,setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

    useEffect(()=> {
        constructRating(rating)
    },[rating,tabIndex])

    const computedFocus = (r:number,index:number):number => {
        if(!isEditable){ 
            return -1
        }
        if(!r && index == 0){
            return tabIndex ?? 0
        }
        if(r == index+1){
            return tabIndex ?? 0
        }
        return -1

    }

    const constructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i:number) => {
            return (
                <span key={i} 
               
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={()=>changeDisplay(rating)}
                onClick={()=>saveRating(i+1)}
                tabIndex= {computedFocus(rating,i)}
                onKeyDown={handleKey}
                ref={(r)=>ratingArrayRef.current?.push(r)}
                role={isEditable ? 'slider' : ''}
                aria-valuenow={rating}
                aria-valuemax={5}
                aria-valuemin={1}
                aria-invalid={error ? true : false}
                aria-label={isEditable?'Укажите рейтинг' : ('рейтинг' + {rating})}
                 >
                    <Star 
                     className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable = true
                    })} 
                
                    />
                </span>
            )
        })
        setRatingArray(updatedArray)
    }
    const handleKey = (e) => {
        if(!isEditable || !setRating){
            return
        }
     
        if(e.code == 'ArrowRight' || e.code == "ArrowUp") {
            if(!rating){
                setRating(1)
            }else {
                e.preventDefault()
                setRating(rating <5 ?rating+1 :5)
            }
        ratingArrayRef.current[rating]?.focus()
           
        }
        if(e.code == 'ArrowLeft' || e.code == "ArrowDown") {
            e.preventDefault()
            setRating(rating >1 ?rating-1:1)
            ratingArrayRef.current[rating-2]?.focus()
        }
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
    <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
        [styles.error] : error
    })}>
        {ratingArray.map((r,i)=> (<span key={i}>{r}</span>))}
        {error && <span role='alert' className={styles.errorMessage}> {error.message}</span>}
    </div>
  )
})

export default Rating