import { CodeOutlined } from '@ant-design/icons'
import React from 'react'
import './education.css'

function Education() {
  return (

    <section className='education'>
    <div className='info-left edu'>
            <h1 className='pacifico-title' >Education</h1>

            <div className='skills-grid'>
                <ul className='skills-ul'>
                <h2 className='pacifico-title'>Udemi</h2>
                <li className='grid-li edu-li'>
                    <a href='#'>
                        <CodeOutlined/>
                        <span>Docker</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='#'><span>NGINX</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='#'>
                        <CodeOutlined/>
                        <span>Python Advanced</span>
                    </a>
                    </li>
                </ul>
                <ul className='skills-ul'>
                <h2 className='pacifico-title'>SoftUni</h2>
                <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/132409/e1a771d7'>
                        <CodeOutlined/>
                        <span>Python Web Framework</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/133018/a77e1107'>
                        <CodeOutlined/>
                        <span>Python Web Basics</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/110486/b3a92e3e'>
                        <CodeOutlined/>
                        <span>Pytho OOP</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='#'>
                        <CodeOutlined/>
                        <span>Python Advanced</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/104716/f7731ca1'>
                        <CodeOutlined/>
                        <span>Python Fundamentals</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/92282/d5c821a8'>
                        <CodeOutlined/>
                        <span>Python Basics</span>
                    </a>
                    </li>
                    {/* <li className='grid-li'>
                    <a href='#'>
                        <CodeOutlined/>
                        <span>Python Algorithms</span>
                    </a>
                    </li> */}
                </ul>

                <ul className='skills-ul'>
                <h2 className='pacifico-title'>SoftUni</h2>
                    <li className='grid-li'>
                    <a href='https://softuni.bg/certificates/details/131663/42a7f1c8'>
                        <CodeOutlined/>
                        <span>Javascript Applications</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='#'>
                        <CodeOutlined/>        
                   
                    <span>Javascript Advanced</span>
                    </a>
            
                    </li>
                    {/* <li className='grid-li'>
                    <a href='#'>
                    <Html5Outlined />
                        <span>HTML and CSS</span>
                    </a>
                    </li>
                    <li className='grid-li'>
                    <a href='#'>
                        <CodeOutlined/>
                        <span>React JS</span>
                    </a>
                    </li> */}
                </ul>
            </div>                      
        </div>
    </section>
  )
}

export default Education
