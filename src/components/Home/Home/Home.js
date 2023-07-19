import styles from './Home.module.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import IconWheel from '../../Common/IconWheel/IconWheel'
import TechStack from '../TechStack/TechStack'


const Home = () => {
    return (
        <section className={`${styles.home}`}>
           <Hero />
           <TechStack />
           {/* <IconWheel></IconWheel> */}
           {/* <AboutMe /> */}
           {/* <Canvas3D /> */}
        </section>
    )
}

export default Home
