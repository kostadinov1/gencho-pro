import './home.css'
import './home-responsive.css'
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
                            <li><CodeOutlined /><a href='https://www.softuni.bg/en'>SoftUni</a></li>
                            <li><LinkedinOutlined /> <a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                            <li><GithubOutlined /> <a href='https://www.github.com/kostadinov1'>Github</a></li>
                            <li><FontAwesomeIcon icon={['fa-doker']} /><a href='https://hub.docker.com/u/gencho'>DockerHub</a></li>
                            {/* <li><a href='https://www.github.com/kostadinov1'>Github</a></li> */}
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
                        I am a full time professional working in London, UK, for the last 10 years. I am studying web developement at <a href='https://www.softuni.bg'>SoftUni</a>  Bulgaria.
                    </p>
                </div>
                <div className='info-right'>
                    <img src={'../../'} alt=''></img> 
                </div>
            </section>
        </section>
    )
}

export default Home