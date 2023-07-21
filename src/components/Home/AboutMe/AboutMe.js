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
            <img src='./images/my_photos/profile_photo_2.jpg' alt=''></img>
        </div>

        <div className={`${styles.card_3} ${styles.about_card}`}>
            <h2>Hi! </h2>
            <p>My name is Evgeni Kostadinov. I am bulgarian, living in London for the last 10 years.
                about 4 years ago I started programming as a hobby, but now, I am looking forward to become
                a full time professional and master it. 
            </p>
            <p>I am graduating this year, April 2023, and I am looking for a team and a place where
                to improve my skills and knowledge.
                Currently I am using Django Rest, React JS, Vanilla HTML5 and CSS3, Postgres, Docker, NGINX and AWS EC2 instances
                to serve my applications. Web Development is what I enjoy doing, but I do not stay away from challanges as well.
                There are also a few great projects on my mind for future.
                If You need more info about me,
                do not hesitate to send me a message from <Link to={'/contacts'}><i>HERE</i></Link>.
            </p>
        </div>

        <div className={`${styles.card_4} ${styles.about_card}`}>
        <div className={`${styles.title}`} >Education</div>
            <ul className={`${styles.about_card_ul}`}>
                <li><a href='link'>DIPLOMA</a></li>
                <li><a href='link'>Python Basics</a></li>
                <li><a href='link'>Python Fundamentals</a></li>
                <li><a href='link'>Python Advanced</a></li>
                <li><a href='link'>Python OOP</a></li>
                <li><a href='link'>Python Web Basics</a></li>
                <li><a href='link'>Python Web Framework (Django)</a></li>
                <li><a href='link'>Javascript Advanced</a></li>
                <li><a href='link'>Javascript Applications</a></li>
                <li><a href='link'>HTML and CSS</a></li>
                <li><a href='link'>React JS</a></li>
            </ul>
        </div>
{/* 
            <li><a href='http://www.gencho.pro'>gencho.pro</a></li>
            <li><a href='https://www.dogramavarna.net'>dogramavarna.net</a></li>
            <li><a href='http://ec2-35-179-75-79.eu-west-2.compute.amazonaws.com:8000/'>dentist.aws</a></li> */}

  </section>
  )
}

export default AboutMe
