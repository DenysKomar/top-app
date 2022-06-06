import React from 'react'
import styles from './ButtonIcon.module.css'
import ButtonIconProps, { icons } from './ButtonIcon.props'
import cn from 'classnames'
import Image from 'next/image'

const ButtonIcon = ({appearance,icon, className, ...props}:ButtonIconProps):JSX.Element => {
  const IconComponent = icons[icon]

  return (
    <button className={cn(styles.button, className, {
        [styles.primary] : appearance=='primary',
        [styles.white] : appearance=='white'

    })}
        {...props}>
          <IconComponent />
    </button>
  )
}

export default ButtonIcon