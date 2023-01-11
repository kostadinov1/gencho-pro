import { Image, } from 'antd'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
        <section >
            {/* <Image
            src='/images/banners/gpro-banner-0.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            >

            </Image> */}
            <div >
                <h1 className='title'>Hello and Welcome to my website!</h1>
                <p>My name is Evgeni Kostadinov and I am web developer.
                    I study Web Development at <a href='https://softuni.bg/'>SoftUni</a> Bulgaria.
                    My personal <Link to='/projects'>projects</Link> are made using Django REST as a Back End
                    and ReactJS as Front End. I am using AWS and Nginx as well as Docker to deploy my applications.
                    You can have a look at the code in my <a href='https://github.com/kostadinov1'>GitHub Profile</a>.
                    
                </p>
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