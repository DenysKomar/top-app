import React from 'react'
import IPtag from './Ptag.props'
import cn from 'classnames'
import styles from './Ptag.module.css'

const Ptag = ({size ='16',className,children,...props}:IPtag):JSX.Element=> {
  return (
    <p className={cn(styles.p,{
            [styles.small]: size == '14',
            [styles.medium]: size == '16',
            [styles.large]: size == '18'
    })}>{children}</p>
  )
}

export default Ptag