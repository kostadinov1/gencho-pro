import './projects.css'

const Projects = () => {

    return (
            <section className="projects">
                {/* <h1>Here are my most recent projects.</h1> */}
                <div className='projects-container'>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/fillups/fillup-code.jpg' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Dograma Varna</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: November 2020</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Ant Design, Docker, Nginx, AWS  </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/fillups/fillup-code.jpg' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Gencho PRO</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: February 2023</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Vanilla HTML and CSS, Docker, Nginx, AWS.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/fillups/fillup-code.jpg' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3> Dentist - Project Defence</h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on: April 2020</h5>
                            <h5>Technologies: Django,Postgresql, CSS Bootstrap, Docker, Nginx, AWS</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className={'project-img'}>
                            <img src='/images/fillups/fillup-code.jpg' alt=''></img>
                        </div>
                        <div className='project-desc'>
                            <h3></h3>
                            <h5><a href='https://'></a></h5>
                            <h5>Created on:</h5>
                            <h5>Technologies: Django REST, React JS, Postgresql, Ant Design, Docker, Nginx, AWS  </h5>
 className={'project-img'}                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Projects;