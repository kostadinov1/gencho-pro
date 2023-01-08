import { Image, } from 'antd'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
        <section >
            <div >
                <h1 className='title'>Hello and Welcome to my website!</h1>
                <p>My name is Evgeni Kostadinov and I am web developer.
                    I have several <Link to='/projects'>projects</Link> completed using React JS as Frontend and Django REST as a backend service. 
                    They are hosted at AWS in Docker Containers serverd with NginX. You can have a look at the code in my <a href='https://github.com/kostadinov1'>GitHub Profile</a>.
                     I am looking forward to get a lot more experienced and I am exited about the technology that the future will bring us. </p>
                {/* <Image 
                src='/images/backgrounds/background-1.jpg' 
                preview={false}
                width={1600}
                height={800}
                /> */}
            </div>
        </section>
        </>
    )
}

export default Home