
import React from 'react'
import styles from  './Hero.module.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className={`${styles.hero}`}>
        <div className={`${styles.welcome}`}>
            <div className={`${styles.hi_box}`}>
                <div className={`${styles.hi}`}>Hi!</div>
                <h3>My name is</h3>
            </div>
            <h1>Evgeni Kostadinov</h1>
            <h2>Web Developer</h2>
            <p>I create Web Application with React JS and Django REST.</p>
            <Link to={'/projects'}>Projects</Link>
        </div>
        <div className='credit_image'>
            <a href="https://www.freepik.com/free-vector/composed-particles-swirling-abstract-graphics-background-sense-science-technology_14803660.htm?query=web%20tech&collectionId=309&&position=5&from_view=collections#position=5">Image by liuzishan</a> on Freepik
        </div>
    </div>
  )
}

export default Hero
