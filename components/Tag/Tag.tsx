import React from 'react'
import {TagProps} from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames'

const Tag = ({size='medium',children,color='primary',href,className, ...props}:TagProps):JSX.Element => {
  return (
    <div className={cn(styles.tag,{
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.large]: size == 'large',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
        })}     
        {...props}>
    {href
    ?<a href={href}>  {children}</a>
    :<>{children}</>}

    </div>
  )
}

export default Tag