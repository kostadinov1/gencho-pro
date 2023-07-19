import styles from './Home.module.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import IconWheel from '../../Common/IconWheel/IconWheel'


const Home = () => {
    return (
        <section className={`${styles.home}`}>
           <Hero />
           {/* <IconWheel></IconWheel> */}
           {/* <AboutMe /> */}
           {/* <Canvas3D /> */}
        </section>
    )
}

export default Home
