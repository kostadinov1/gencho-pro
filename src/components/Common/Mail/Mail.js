
import styles from './Mail.module.css'
import React from 'react'

const Mail = () => {
  return (
    <div className={`${styles.letter_image}`}   >
        <div className={`${styles.animated_mail}`}   >
            <div className={`${styles.back_fold}`}   ></div>
            <div className={`${styles.letter}`}   >
                <div className={`${styles.letter_border}`}   ></div>
                <div className={`${styles.letter_title}`}   ></div>
                <div className={`${styles.letter_context}`}   ></div>
                <div className={`${styles.letter_stamp}`}   >
                    <div className={`${styles.letter_stamp_inner}`}   ></div>
                </div>
            </div>
            <div className={`${styles.top_fold}`}   ></div>
            <div className={`${styles.body}`}   ></div>
            <div className={`${styles.left_fold}`}   ></div>
        </div>
        <div className={`${styles.shadow}`}   ></div>
    </div>
  )
}

export default Mail