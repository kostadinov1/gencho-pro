
import { HomeFilled } from '@ant-design/icons'
import styles from './IconWheel.module.css'
import React from 'react'

const IconWheel = () => {
  return (
    <div className={`${styles.icon_wheel}`}>
        <div className={`${styles.icon} ${styles.icon_1}`}>
            <img alt='' src='/images/icons/node-js.png'></img>
        </div>
        <div className={`${styles.icon} ${styles.icon_2}`}>
            <img alt='' src='/images/icons/js.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_3}`}>
            <img alt='' src='/images/icons/django.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_4}`}>
            <img alt='' src='/images/icons/python.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_5}`}>
            <img alt='' src='/images/icons/social.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_6}`}>
            <img alt='' src='/images/icons/docker.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_7}`}>
            <img alt='' src='/images/icons/nginx.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_8}`}>
            <img alt='' src='/images/icons/science.png'></img>
            
        </div>
        <div className={`${styles.icon} ${styles.icon_9}`}>
            <img alt='' src='/images/icons/web.png'></img>
            </div>
    </div>
  )
}

export default IconWheel