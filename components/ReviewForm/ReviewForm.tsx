import React, { useState } from 'react'
import ReviewFormProps from './ReviewForm.props'
import cn from 'classnames'
import styles from './ReviewForm.module.css'
import Input from '../Input/Input'
import Rating from '../Rating/Rating'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
import CloseIcon from '../../public/close.svg'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface'
import axios from 'axios'
import { API } from '../../helpers/api'

const ReviewForm = ({isOpened,productId,className,...props}:ReviewFormProps):JSX.Element=> {
  const { register, control, handleSubmit,formState: {errors},reset} =useForm<IReviewForm>();
  const [isSuccess,setIsSuccess] = useState<boolean>(false)
  const [isError,setIsError] = useState<string>()

  const onSubmit = async (formData:IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData,productId})
      if(data.message) {
        setIsSuccess(true)
        reset()
      } else {
        setIsError('Что-то пошло не так')
      }
    } catch(e) {
      setIsError(e.message)
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.reviewForm} {...props}>
          <Input {...(register('name', {
           required:{
             value:true,
             message:"Заполните имя"
           }
          }))} placeholder="Имя" error={errors.name} tabIndex={isOpened?0:-1}/>
          <Input {...(register('title' , {
           required:{
             value:true,
             message:"Заполните заголовок"
           }
          }))} placeholder="Заголовок" className={cn(styles.title)} error={errors.title} tabIndex={isOpened?0:-1}/>
          <div className={styles.rating}>
              <span>Оценка:</span>
              <Controller
                  control={control}
                  name="rating"
                  rules={{required:{
                    value:true,
                    message:"Укажите рейтинг"
                  }}}
                  render= {({field})=>(
                    <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} error={errors.rating} tabIndex={isOpened?0:-1} />
                  )}
              />
              
          </div>
          <TextArea {...(register('description'  , {
           required:{
             value:true,
             message:"Заполните заголовок"
           }
          }))} placeholder="Текст"  className={cn(styles.textArea)} error={errors.description} tabIndex={isOpened?0:-1}/>
          <div className={styles.submit}>
            <Button appearance='primary' tabIndex={isOpened?0:-1}> Отправить</Button>
            <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
          </div>
      </div>
     {isSuccess && <div className={cn(styles.panel, styles.success)}>
        <div className={styles.successTitle} >Ваш отзыв отправлен</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки
        </div>
        <CloseIcon className={styles.close} onClick={()=> setIsSuccess(false)}/>
      </div>}
      {isError && <div className={cn(styles.panel, styles.error)}>
        Что-то пошло не так...
        <CloseIcon className={styles.close} onClick={()=> setIsError(undefined)}/>
      </div>}
    </form>
  )
}

export default ReviewForm