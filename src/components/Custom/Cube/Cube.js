import { CodeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Cube.module.css'

function Cube() {
  return (
    <div className={styles.cube_box}>
        <div className={styles.cube}>        
            <div className={`${styles.card} ${styles.front}`}>
            <a href='https://www.softuni.bg'><CodeOutlined />SoftUni</a>            
            </div>
            <div className={`${styles.card} ${styles.left}`}>
            <a href='linkedin.com/in/evgeni-k-a5a734218'><LinkedinOutlined />LinkedIn</a>
              </div>
            <div className={`${styles.card} ${styles.right}`}>
            <a href='https://hub.docker.com/u/gencho'><CodeOutlined />DockerHub</a>
            </div>
            <div className={`${styles.card} ${styles.back}`}>
              <a href='https://github.com/kostadinov1'><GithubOutlined />GitHub</a>
            </div>
            <div className={`${styles.card} ${styles.top}`}>
            <a href='https://monkeytype.com/profile/evgeni'><FontAwesomeIcon icon={faKeyboard}/>MonkeyType</a>
            </div>
            <div className={`${styles.card} ${styles.bottom}`}>
                <h3>Welcome</h3>
            </div>
        </div>
    </div>
  )
}

export default Cube
