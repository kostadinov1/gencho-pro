import './home.css'
import './home-responsive.css'
import './education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CodeOutlined, GithubOutlined, Html5Outlined, LinkedinOutlined } from '@ant-design/icons'
import { faAt, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import DockerIcon from '../../custom/DockerIcon'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <section className="home">
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
                            <li><LinkedinOutlined /> <a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
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
        </section>
    )
}

export default Home
