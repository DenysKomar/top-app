import React, { ForwardedRef, forwardRef } from 'react'
import {TextAreaProps} from './TextArea.props'
import cn from 'classnames'
import styles from './TextArea.module.css'

const TextArea = forwardRef(({error,className,...props}:TextAreaProps,ref:ForwardedRef<HTMLTextAreaElement>):JSX.Element=> {
  return (
    <div className={cn(styles.wrapperTextArea,className)}>
    <textarea className={cn(styles.textarea,{
      [styles.error]: error
    })} ref={ref} {...props} />
    {error && <span className={styles.errorMessage}> {error.message}</span>}
    </div>
  )
})

export default TextArea