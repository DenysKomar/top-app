import React from 'react'
import { InputProps } from './Input.props'
import cn from 'classnames'
import styles from './Input.module.css'

const Input = ({className,...props}:InputProps):JSX.Element=> {
  return (
    <input className={cn(className,styles.input)} {...props} />
  )
}

export default Input