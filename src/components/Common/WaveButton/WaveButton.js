import styles from './WaveButton.module.css'
import React from 'react'

const WaveButton = ({content}) => {
  return (
    <a href='' type='submit'  className={`${styles.ankor}`}>
            {content}
        <div className={`${styles.wave}`}></div>
    </a>
  )
}

export default WaveButton