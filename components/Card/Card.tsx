import React, { ForwardedRef, forwardRef } from 'react'
import IPtag from './Card.props'
import cn from 'classnames'
import styles from './Card.module.css'
import { motion } from 'framer-motion'

const Card = motion(forwardRef(({color = 'white',className,children,...props}:IPtag,ref:ForwardedRef<HTMLDivElement>):JSX.Element=> {
  return (
    <div className={cn(styles.card,className,{
      [styles.blue] : color == 'blue'
    })} ref={ref}
    {...props}>{children}</div>
  )
}))

export default Card