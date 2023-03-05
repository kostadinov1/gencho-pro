import './home.css'
import './home-responsive.css'
import Hero from './Hero/Hero'
import Education from './Education/Education'
import AboutMe from './AboutMe/AboutMe'
import Canvas3D from '../Custom/Canvas3D/Canvas3D'

const Home = () => {
    return (
        <section className="home">
           <Hero />
           <Education />
           <AboutMe />
           {/* <Canvas3D /> */}
        </section>
    )
}

export default Home
