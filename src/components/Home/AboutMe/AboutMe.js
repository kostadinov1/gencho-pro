import { CodeOutlined, Html5Outlined } from '@ant-design/icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './about-me.css'

function AboutMe() {
  return (

    <section className='info'>
    <div className='info-left'>
        <h1 className='pacifico-title'>About Me</h1>
        <p>
            Hi! My name is Evgeni. I study web developement at <a href='https://www.softuni.bg'>SoftUni</a> Bulgaria.
            For the last 10 years I live in London, Uk, working a construction
             related full time job. About 3 year ago I found programming.
            It started as a hobby, but now, I'm about to gratuate and become a full 
            time professional. Here You can find some basic info about me,
            but if You feel like asking me a question, You can do it <Link to={'/contacts'}>here</Link>. 
        </p>
        <h3></h3>
        <p> </p>
        <div className='skills-grid'>
            <ul className='skills-ul'>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Django</span>
                </li>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> DjangoREST</span>
                </li>
                <li className='grid-li'>
                    <FontAwesomeIcon icon={faAt}/>
                    <span> React JS</span>
                </li> 
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Postgresql</span>
                </li> 
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> SQL</span>
                </li>
            </ul>
            <ul className='skills-ul'>
            <h2 className='pacifico-title'>Tech Skills</h2>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Python</span>
                </li>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Javascript</span>
                </li>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Node JS</span>
                </li> 
                <li className='grid-li'>
                <Html5Outlined />
                    <span> HTML5</span>
                </li> 
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> CSS3</span>
                </li>
            </ul>

            <ul className='skills-ul'>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Ubuntu</span>
                </li>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> BASH</span>
                </li>
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span> Docker</span>
                </li> 
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span>NGINX</span>
                </li> 
                <li className='grid-li'>
                    <CodeOutlined/>
                    <span>AWS</span>
                </li>
            </ul>
        </div>                      
    </div>
    <div className='info-right'>
        <img src={'/images/my_photos/profile_photo_2.jpg'} alt=''></img> 
        <div className='card-info'>
            <h3>Evgeni Kostadinov</h3>
            <h3>web developer</h3>
            <h4>London, UK</h4>
        </div>
    </div>
</section>
  )
}

export default AboutMe
