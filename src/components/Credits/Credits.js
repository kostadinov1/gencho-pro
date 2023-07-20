import React from 'react'
import styles from './Credits.module.css'


const Credits = () => {
  return (
    <div className={`${styles.credits}`}>
        <h1 className={`${styles.credit_title}`}>A Huge Thank You!!!</h1>
        <h2 className={`${styles.credit_subtitle}`}>To the Authors and Creators of the resourses I used for the creation of this website! This website would not be possible without YOU!</h2>


        <div className={`${styles.credits_grid}`}>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/backgrounds/hero-background-compressed.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-vector/programming-coding-development-isometric-flowchart-with-daily-meeting-coding-advertising-template-dev-ops-different-steps_15080199.htm#page=3&query=web%20development&position=48&from_view=search&track=ais#position=48&page=3&query=web%20development">Image by macrovector</a> on Freepik
                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/backgrounds/hero-background-compressed.jpg' />
                <div className={`${styles.credit_message_box}`}>
                    
                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/backgrounds/hero-background-compressed.jpg' />
                <div className={`${styles.credit_message_box}`}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Credits