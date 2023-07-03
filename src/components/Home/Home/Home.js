import styles from './Home.module.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'


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
