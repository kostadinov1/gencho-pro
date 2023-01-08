import { Image, } from 'antd'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
        <section >
            <Image
            src='/images/banners/gpro-banner-0.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            >

            </Image>
            <div >
                <h1 className='title'>Hello and Welcome to my website!</h1>
                <p>My name is Evgeni Kostadinov and I am web developer.
                    I have several <Link to='/projects'>projects</Link> completed using React JS as Frontend and Django REST as a backend service.
                    I am also using AWS, Docker and NginX to deploy my applications. You can have a look at the code in my <a href='https://github.com/kostadinov1'>GitHub Profile</a>.
                     I am looking forward to get a lot more experience and I am exited about the technology that the future will bring us. </p>
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