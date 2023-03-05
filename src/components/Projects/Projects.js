import './projects.css'

const Projects = () => {

    return (
        <section className='projects-main'>
            <section className="projects">
                <h1>Most Recent Projects</h1>
                <div className='projects-container'>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/projects-screenshots/dogramavarna-screenshot.png' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Dograma Varna</h3>
                            <h5>LINK:<a href='https://www.dogramavarna.net'>dogramavarna.net</a></h5>
                            <h5>GitHub:<a href='https://github.com/kostadinov1/Glazing-REST-Backend'> dogramavarna - Backend</a></h5>
                            <h5>GitHub:<a href='https://github.com/kostadinov1/glazing-react-antd-frontend'> dogramavarna - Frontkend</a></h5>
                            <h5>Created on: November 2020</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Ant Design, Docker, Nginx, AWS  </h5>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/backgrounds/AI-backgrounds/ai-background-1.png' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Gencho PRO</h3>
                            <h5>LINK:<a href='http://www.gencho.pro'> gencho.pro</a></h5>
                            <h5>GitHub:<a href='https://github.com/kostadinov1/gencho-pro'> gencho frontend</a></h5>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: February 2023</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Vanilla HTML and CSS, Docker, Nginx, AWS.</h5>
                            <p>  </p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                        <img src='/images/projects-screenshots/dentist-screenshot.png' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Dentist - Project Defence</h3>
                            <h5>LINK:<a href='http://ec2-35-179-75-79.eu-west-2.compute.amazonaws.com:8000/'> dentist project</a></h5>
                            <h5>GitHub:<a href='https://github.com/kostadinov1/dentist-2022'> dentist project</a></h5>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: April 2020</h5>
                            <h5>Technologies: Django,Postgresql, CSS Bootstrap, Docker, Nginx, AWS</h5>
                            <p>    </p>
                        </div>
                    </div>
                
                </div>
            </section>
            <section className="projects upcoming">
                <h1 >Upcoming Projects</h1>
                <div className='projects-container'>
                    {/* <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/fillups/fillup-code.jpg' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Sports Periodization App</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: November 2020</h5>
                            <h5>Technologies: Django REST, React JS, HTML, CSS, Postgresql, Docker, Nginx, AWS  </h5>
                            <p></p>
                        </div>
                    </div> */}
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/backgrounds/AI-backgrounds/ai-background-1.png' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Sports Periodization App</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Coming soon...</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Vanilla HTML and CSS, Docker, Nginx, AWS.</h5>
                            <p>   </p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                        <img src='/images/backgrounds/AI-backgrounds/ai-background-2.png' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3>Beach Bar website</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Coming soon...</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Vanilla HTML and CSS, Docker, Nginx, AWS.</h5>
                            <p>   </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects;