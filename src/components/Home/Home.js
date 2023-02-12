import { Image, Space } from 'antd'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
        <Image
            style={{padding: '80px'}}
            src='/images/banners/banner-1.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            />
        <Space direction='vertical'>
            <Space  size={'small'} style={{padding: '50px' }}>

       
            </Space>
                <Space >
                    <Space direction='vertical' >
                    <h1 className='title'>Hello and Welcome to my website!</h1>
                    <p>My name is Evgeni Kostadinov and I am web developer.
                        I study Web Development at <a href='https://softuni.bg/'>SoftUni</a> Bulgaria.
                        My personal <Link to='/projects'>projects</Link> are made using Django REST as a Back End
                        and ReactJS as Front End. I am using AWS and Nginx as well as Docker to deploy my applications.
                        You can have a look at the code in my <a href='https://github.com/kostadinov1'>GitHub Profile</a>.
                    </p>
                    </Space>
                        <Image 
                            src='/images/fillups/fillup-code.jpg'
                            style={{padding: '60px'}}
                            preview={false}
                            width={'auto'}
                            height={'auto'}
                            />
                    <Space>
                </Space>
            </Space>

        </Space>
                            </>
    )
}

export default Home