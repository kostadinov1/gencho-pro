import React from 'react'
import styles from './Credits.module.css'


const Credits = () => {
  return (
    <div className={`${styles.credits}`}>
        <h1 className={`${styles.credit_title}`}>A Big Thank You to the Authors and Creators of the resourses I used for the creation of this website!</h1>

        <div className={`${styles.credits_grid}`}>
            <div className={`${styles.credit_box}`}>
            <img 
            className={`${styles.credit_img}`}
            alt='' src='' />
            <div className={`${styles.credit_message_box}`}>

            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Credits