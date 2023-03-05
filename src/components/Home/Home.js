import './home.css'
import './home-responsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CodeOutlined, GithubOutlined, Html5Outlined, LinkedinOutlined } from '@ant-design/icons'
import { faAt, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import DockerIcon from '../../custom/DockerIcon'
import { Link } from 'react-router-dom'
import Hero from './Hero/Hero'
import Education from './Education/Education'
import AboutMe from './AboutMe/AboutMe'

const Home = () => {
    return (
        <section className="home">
           <Hero />
           <Education />
           <AboutMe></AboutMe>
        </section>
    )
}

export default Home
