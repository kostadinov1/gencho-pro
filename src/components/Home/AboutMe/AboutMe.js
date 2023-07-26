import { CodeOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from'./AboutMe.module.css'



function AboutMe() {
  return (

    <section className={`${styles.about_me}`}>

        <div className={`${styles.card_1} ${styles.about_card}`}>
            <div className={`${styles.title}`} >About Me</div>
        </div>
        <div className={`${styles.card_2} ${styles.about_card}`}>
            <img className={`${styles.about_img}`} src='/images/placeholders/software.jpeg' alt=''></img>
        </div>

        <div className={`${styles.card_3} ${styles.about_card}`}>
            <div className={`${styles.card_3_title}`}>Hi! </div>
            <p>My name is Evgeni Kostadinov. I am bulgarian, living near Varna, Bulgaria.
                About 3 years ago I started programming as a hobby, but now, I am looking forward to become
                a full time professional and master it. 
            </p>
            <p>I graduated this year (2023), and I really want to improve my skills and knowledge.
                Currently I am using Django Rest, React JS, Vanilla HTML5 and CSS3, Postgres, Docker, NGINX and AWS EC2 instances
                to serve my applications. Web Development is what I enjoy doing, but I do not stay away from challanges as well.
                There are also a few great projects on my mind for future.
                If You need more info about me,
                do not hesitate to send me a message from <Link to={'/contacts'}><i>HERE</i></Link>.
                You can also check out my <Link to={'/projects'}><i>Projects</i></Link>. Thanks for visiting my website!
            </p>
        </div>

        <div className={`${styles.card_4} ${styles.about_card}`}>
        <div className={`${styles.card_4_title}`} >Education</div>
            <ul className={`${styles.about_card_ul}`}>
                <li><a href='https://softuni.bg/certificates/details/169749/e86f2042'>DIPLOMA</a></li>
                <li><a href='https://softuni.bg/certificates/details/92282/d5c821a8'>Python Web Basics</a></li>
                <li><a href='https://softuni.bg/certificates/details/104716/f7731ca1'>Python Fundamentals</a></li>
                {/* <li><a href='link'>Python Advanced</a></li> */}
                <li><a href='https://softuni.bg/certificates/details/110486/b3a92e3e'>Python OOP</a></li>
                <li><a href='https://softuni.bg/certificates/details/133018/a77e1107'>Python Web Basics</a></li>
                <li><a href='https://softuni.bg/certificates/details/132409/e1a771d7'>Python Web Framework (Django)</a></li>
                {/* <li><a href='link'>Javascript Advanced</a></li> */}
                <li><a href='https://softuni.bg/certificates/details/131663/42a7f1c8'>Javascript Applications</a></li>
                <li><a href='https://softuni.bg/certificates/details/163376/ee189260'>HTML and CSS</a></li>
                <li><a href='https://softuni.bg/certificates/details/168632/24f8bfa8'>React JS</a></li>
            </ul>
        </div>

  </section>
  )
}

export default AboutMe
