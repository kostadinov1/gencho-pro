import React from 'react'
import styles from './Cube.module.css'

function Cube() {
  return (
    <div className={styles.cube_box}>
        <div className={styles.cube}>        
            <div className={`${styles.card} ${styles.front}`}>
                <img src={'./images/backgrounds/background-11.jpg'} alt=''></img>
            
            </div>
            <div className={`${styles.card} ${styles.back}`}>Back</div>
            <div className={`${styles.card} ${styles.left}`}>Left</div>
            <div className={`${styles.card} ${styles.right}`}>Right</div>
            <div className={`${styles.card} ${styles.top}`}>Top</div>
            <div className={`${styles.card} ${styles.bottom}`}>Bottom</div>
        </div>
    </div>
  )
}

export default Cube
