import React from 'react'
import cn from 'classnames'
import styles from './Advantages.module.css'
import AdvantagesProps from './Advantages.props'
import CheckIcon from '../../public/mark.svg'




const Advantages = ({advantages}):JSX.Element=> {
  return (
    <>
    {advantages.map(a => (
      <div key={a._id} className={styles.advantage}>
        <CheckIcon/>
        <div className={styles.title}>{a.title}</div>
        <hr className={styles.vline}/>
        <div>{a.description}</div>
      </div>
    ))}
    </>
  )
}

export default Advantages