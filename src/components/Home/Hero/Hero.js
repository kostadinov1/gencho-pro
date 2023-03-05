import { CodeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div>
       <section className='hero'>
                <div className='hero-left'>
                    <img src={'/images/wallpapers/wallpaper-24.jpg'} alt='no image'></img>
                    <div className='title-box'>
                        <h1><h1 id='hi'>Hi!</h1> I'm Evgeni.</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='hero-right-links-box'>
                    <h2>Links</h2>
                        <ul>
                            <li><CodeOutlined></CodeOutlined> <a href='https://www.softuni.bg/en'>SoftUni</a></li>
                            <li><LinkedinOutlined /> <a href='linkedin.com/in/evgeni-k-a5a734218'>LinkedIn</a></li>
                            <li><GithubOutlined /> <a href='https://www.github.com/kostadinov1'>GitHub</a></li>
                            <li><CodeOutlined/> <a href='https://hub.docker.com/u/gencho'>DockerHub</a></li>
                            {/* <li><DockerIcon className='docker-icon'/> <a href='https://hub.docker.com/u/gencho'>DockerHub</a></li> */}
                            <li><FontAwesomeIcon icon={faKeyboard}/> <a href='https://monkeytype.com/profile/evgeni'>MonkeyType</a></li>
                        </ul>
                    </div>
                </div>
                <div className='photo-credit-box'>
                    <a href="https://unsplash.com/pt-br/@goumbik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by Lukas Blazek</a>
                    <a href="https://unsplash.com/photos/mcSDtbWXUZU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">on Unsplash</a>
                </div>
            </section>

    </div>
  )
}

export default Hero
