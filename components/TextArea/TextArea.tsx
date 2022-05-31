import React from 'react'
import {TextAreaProps} from './TextArea.props'
import cn from 'classnames'
import styles from './TextArea.module.css'

const TextArea = ({className,...props}:TextAreaProps):JSX.Element=> {
  return (
    <textarea className={cn(className,styles.textarea)} {...props} />
  )
}

export default TextArea