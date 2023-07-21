import React from 'react'
import styles from './Credits.module.css'


const Credits = () => {
  return (
    <div className={`${styles.credits}`}>
        <h1 className={`${styles.credit_title}`}>A HUGE THANK YOU!!!</h1>
        <h2 className={`${styles.credit_subtitle}`}>To the Authors and Creators of the resourses I used for the creation of this website! This website would not be possible without YOU!</h2>


        <div className={`${styles.credits_grid}`}>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/backgrounds/hero-background-compressed.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-vector/composed-particles-swirling-abstract-graphics-background-sense-science-technology_14803660.htm#query=composed-particles-swirling-abstract-graphics-background-sense-science-technology&position=0&from_view=search&track=sph">Image by liuzishan</a> on Freepik                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/production-board.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-vector/creative-web-homepage-illustration_21742831.htm#page=2&query=web%20development&position=15&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik
                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-vector/search-engine-optimization_5596168.htm#page=6&query=web%20development&position=2&from_view=search&track=ais">Image by gstudioimagen</a> on Freepik
                </div>
            </div>

            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/' />
                <div className={`${styles.credit_message_box}`}>

                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/' />
                <div className={`${styles.credit_message_box}`}>

                </div>
            </div>



        </div>
    </div>
  )
}

export default Credits