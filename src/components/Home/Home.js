import './home.css'
import './home-responsive.css'
// import imgFile from '/public/images/my_photos/profile_photo_2.jpg '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CodeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
const Home = () => {
    return (
        <section className="home">
            <section className='hero'>
                <div className='hero-left'>
                    <div className='title-box'>
                        <h1><h1 id='hi'>Hi,</h1> I'm Evgeni.</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='hero-right-links-box'>
                        {/* <h3>My Links</h3> */}
                        <ul>
                            <li><CodeOutlined></CodeOutlined><a href='https://www.softuni.bg/en'>SoftUni</a></li>
                            <li><LinkedinOutlined /> <a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                            <li><GithubOutlined /> <a href='https://www.github.com/kostadinov1'>Github</a></li>
                            <li><CodeOutlined></CodeOutlined><a href='https://hub.docker.com/u/gencho'>DockerHub</a></li>
                            <li><CodeOutlined></CodeOutlined><a href='https://monkeytype.com/profile/evgeni'>MonkeyType</a></li>
                        </ul>
                    </div>
                </div>
                <div className='photo-credit-box'>
                    <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by Marek Piwnicki</a> 
                    <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">on Unsplash</a>
                </div>
            </section>

            <section className='info'>
                <div className='info-left'>
                    <h1>About Me</h1>
                    <p>
                        Hi! My name is Evgeni and this year I'm about to gradute web developement at <a href='https://www.softuni.bg'>SoftUni</a> Bulgaria.
                        For the last 10 years I live in London, Uk, working a construction related full time job. About 3 year ago I found programming.
                        It started as a hobby, but now, I'm about to gratuate and go professional 
                    </p>
                        <div className='skills-box'>
                            <div className='skill-list'>
                                <h2>Hard Skills</h2>
                                <ul>
                                    <li>Python</li>
                                    <li>Javascript</li>
                                    <li>Django</li>
                                    <li>Django REST</li>
                                    <li>React JS</li>
                                    <li>Postgresql</li>
                                    <li>SQL</li>
                                    <li></li>
                                    <li></li>
                                </ul> 
                            </div>
                            <div className='skill-list'>
                            <h2>Soft Skills</h2>
                            <ul>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Django</li>
                                <li>Django REST</li>
                                <li>React JS</li>
                                <li>Postgresql</li>
                                <li>SQL</li>
                                <li></li>
                                <li></li>
                            </ul>
                            </div>
                            <div className='skill-list'>
                                <h2>Hard Skills</h2>
                                <ul>
                                    <li>Python</li>
                                    <li>Javascript</li>
                                    <li>Django</li>
                                    <li>Django REST</li>
                                    <li>React JS</li>
                                    <li>Postgresql</li>
                                    <li>SQL</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                                <h2>Certificates</h2>
                        <div className='certs'>
                            <div className='softuni'>
                                <ul>
                                    <li><a href='https://softuni.bg/certificates/details/92282/d5c821a8'>Python Basics</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/104716/f7731ca1'>Python Fundamentals</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/110486/b3a92e3e'>Python OOP</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/133018/a77e1107'>Python Web Basics</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/132409/e1a771d7'>Python Web Framework</a></li>

                                    {/* <li><a href='#'>Javascript Advanced</a></li> */}
                                    <li><a href='https://softuni.bg/certificates/details/131663/42a7f1c8'>Javascript Applications</a></li>
                                    {/* <li><a href='#'></a>HTML&CSS</li> */}
                                    {/* <li><a href='#'>React JS</a></li> */}
                                </ul>
                            </div>
                            <div className='softuni'>
                                <ul>
                                    <li><a href='https://softuni.bg/certificates/details/92282/d5c821a8'>Python Basics</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/104716/f7731ca1'>Python Fundamentals</a></li>
                                    <li><a href='https://softuni.bg/certificates/details/110486/b3a92e3e'>Python OOP</a></li>
                                    <li><a href='#'>Python Advanced</a></li>
                                    <li><a href='#'>Python Web Framework</a></li>
                                    {/* <li><a href='#'>Javascript Advanced</a></li> */}
                                    <li><a href='#'>Javascript Applications</a></li>
                                    {/* <li><a href='#'></a>HTML&CSS</li> */}
                                    <li><a href='#'>A</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className='info-right'>
                    <img src={'/images/my_photos/profile_photo_2.jpg'} alt=''></img> 
                    <div className='card-info'>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home