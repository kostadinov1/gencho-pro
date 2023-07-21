import styles from './WaveButton.module.css'
import React from 'react'

const WaveButton = () => {
  return (
    <a href='link'  className={`${styles.ankor}`}>
            Login
        <div className={`${styles.wave}`}></div>
    </a>
  )
}

export default WaveButton