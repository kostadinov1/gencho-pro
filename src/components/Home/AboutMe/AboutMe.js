import { CodeOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from'./AboutMe.module.css'



function AboutMe() {
  return (

    <section className='about-me'>
        <div className='card-1 about-card'>
            <img src='./images/my_photos/profile_photo_2.jpg' alt=''></img>
        </div>
        <div className='card-2 about-card'>
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

        <div className='card-3 about-card'>
        </div>

        <div className='card-4 about-card'>
        </div>

        <div className='card-6 about-card'>
        <h2>Tech Stack </h2>
        <ul type='list'>
            <li>Python</li>
            <li>Javascript</li>
            <li>Node JS</li>
            <li>Django</li>
            <li>Django REST</li>
            <li>React JS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Ubuntu</li>
            <li>Bash</li>
            <li>Docker</li>
            <li>Docker-Compose</li>
            <li>NGINX</li>
            <li>AWS</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>Ant Design</li>
        </ul>
        </div>
        <div className='card-7 about-card'>
            <h2>Certificates</h2>
            <ul>
                <li>Python Basics</li>
                <li>Python Fundamentals</li>
                <li>Python Advanced</li>
                <li>Python OOP</li>
                <li>Python Web Basics</li>
                <li>Python Web Framework (Django)</li>
                <li>Javascript Advanced</li>
                <li>Javascript Applications</li>
                <li>HTML and CSS</li>
                <li>React JS</li>
            </ul>
        </div>
        <div className='card-8 about-card'>
        <h2>Soft Skills </h2>
        <ul>
            <li>Growth Mindset</li>
            <li>Good Time Management</li>
            <li>Calm</li>
            <li>Disciplined</li>
            <li>Experimenter</li>
        </ul>
        </div>
        <div className='card-9 about-card'>
        <h2>Projects </h2>
        <ul>
            <li><a href='http://www.gencho.pro'>gencho.pro</a></li>
            <li><a href='https://www.dogramavarna.net'>dogramavarna.net</a></li>
            <li><a href='http://ec2-35-179-75-79.eu-west-2.compute.amazonaws.com:8000/'>dentist.aws</a></li>
        </ul>
        </div>
        <div className='card-10 about-card'>
        <h2>Grades</h2>
        <ul>
            <li>Heading towards A
                1st
            </li>
        </ul>
        </div>
  </section>
  )
}

export default AboutMe
