
import React from 'react'
import styles from  './Hero.module.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className={`${styles.hero}`}>
        <div className={`${styles.blob} ${styles.blob_1}`}></div>
        <div className={`${styles.blob} ${styles.blob_2}`}></div>
        <div className={`${styles.blob} ${styles.blob_3}`}></div>
        <div className={`${styles.blob} ${styles.blob_4}`}></div>
        <div className={`${styles.blob} ${styles.blob_5}`}></div>
        <div className={`${styles.blob} ${styles.blob_6}`}></div>
        <div className={`${styles.welcome}`}>
            <div className={`${styles.hi_box}`}>
                <div className={`${styles.hi}`}>Hi!</div>
                <h3>My name is</h3>
            </div>
            <h1>Evgeni Kostadinov</h1>
            <ul className={`${styles.web_dev_ul}`}>
              <li className={`${styles.web_dev_li} ${styles.li_1}`}>W</li>
              <li className={`${styles.web_dev_li} ${styles.li_2}`}>E</li>
              <li className={`${styles.web_dev_li} ${styles.li_3}`}>B</li>
              <li className={`${styles.web_dev_li} ${styles.li_4}`}></li>
              <li className={`${styles.web_dev_li} ${styles.li_5}`}>D</li>
              <li className={`${styles.web_dev_li} ${styles.li_6}`}>E</li>
              <li className={`${styles.web_dev_li} ${styles.li_7}`}>V</li>
              <li className={`${styles.web_dev_li} ${styles.li_8}`}>E</li>
              <li className={`${styles.web_dev_li} ${styles.li_9}`}>L</li>
              <li className={`${styles.web_dev_li} ${styles.li_10}`}>O</li>
              <li className={`${styles.web_dev_li} ${styles.li_11}`}>P</li>
              <li className={`${styles.web_dev_li} ${styles.li_12}`}>E</li>
              <li className={`${styles.web_dev_li} ${styles.li_13}`}>R</li>
            </ul>
            <p className={`${styles.hi_box_p}`}>I create Web Application using React JS and Django.</p>

                <Link 
                  to={'/projects'} 
                  className={`${styles.button}`}>
                  <div className={`${styles.wave}`}></div>
                  Projects
                </Link>
        </div>
        <div className='credit_image'>
            <a href="https://www.freepik.com/free-vector/composed-particles-swirling-abstract-graphics-background-sense-science-technology_14803660.htm?query=web%20tech&collectionId=309&&position=5&from_view=collections#position=5">Image by liuzishan</a> on Freepik
        </div>
    </div>
  )
}

export default Hero
