import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './Up.module.css'
import UpIcon from '../../public/UpIcon.svg'
import { useScrollY } from '../../hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

const Up = ():JSX.Element=> {

  const controls = useAnimation()
  const y = useScrollY()

  useEffect(()  => {
    controls.start({opacity: y / document.body.scrollHeight})
  },[y,controls])

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={controls}
    className={styles.up}
    onClick={scrollToTop}>
        
        <ButtonIcon appearance='primary' icon='UpIcon' aria-label="Вернутся в начало" onClick={scrollToTop} ></ButtonIcon>
    </motion.div>
  )
}

export default Up