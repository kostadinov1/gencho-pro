import styles from './Home.module.css'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Canvas3D from '../Custom/Canvas3D/Canvas3D'

const Home = () => {
    return (
        <section className={`${styles.home}`}>
           <Hero />
           {/* <AboutMe /> */}
           {/* <Canvas3D /> */}
        </section>
    )
}

export default Home
