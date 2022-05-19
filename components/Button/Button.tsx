import React from 'react'
import styles from './Button.module.css'
import ButtonProps from './Button.props'
import cn from 'classnames'
import Image from 'next/image'

const Button = ({appearance,arrow='none',children, className, ...props}:ButtonProps):JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
        [styles.primary] : appearance=='primary',
        [styles.ghost] : appearance=='ghost'

    })}
        {...props}>
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow,className,{
        [styles.down]:arrow ==='down',
        [styles.right]:arrow ==='right'
      })}>
        <Image src='/Vector.svg' width="6" height="10" alt='arrow'/>
        </span>}
    </button>
  )
}

export default Button