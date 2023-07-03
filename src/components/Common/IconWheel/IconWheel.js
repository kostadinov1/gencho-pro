
import { HomeFilled } from '@ant-design/icons'
import styles from './IconWheel.module.css'
import React from 'react'

const IconWheel = () => {
  return (
    <div className={`${styles.icon_wheel}`}>
        <div className={`${styles.icon} ${styles.icon_1}`}>
            <HomeFilled></HomeFilled>1
        </div>
        <div className={`${styles.icon} ${styles.icon_2}`}>
            <HomeFilled></HomeFilled>2
        </div>
        <div className={`${styles.icon} ${styles.icon_3}`}>
            <HomeFilled></HomeFilled>3
        </div>
        <div className={`${styles.icon} ${styles.icon_4}`}>
            <HomeFilled></HomeFilled>4
        </div>
        <div className={`${styles.icon} ${styles.icon_5}`}>
            <HomeFilled></HomeFilled>5
        </div>
        <div className={`${styles.icon} ${styles.icon_6}`}>
            <HomeFilled></HomeFilled>6
        </div>
        <div className={`${styles.icon} ${styles.icon_7}`}>
            <HomeFilled></HomeFilled>7
        </div>
        <div className={`${styles.icon} ${styles.icon_8}`}>
            <HomeFilled></HomeFilled>8
        </div>
        <div className={`${styles.icon} ${styles.icon_9}`}>
            <HomeFilled></HomeFilled>9</div>
    </div>
  )
}

export default IconWheel