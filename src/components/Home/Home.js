import './home.css'
import './home-responsive.css'
const Home = () => {
    return (
        <section className="home">
            <section className='hero'>
                <div className='hero-left'>
                    <div className='title'>
                        <h1><h1 id='hi'>Hi,</h1> I'm Evgeni Kostadinov.</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <div className='hero-right'>

                <img src={'../../'} alt=''></img> 
                <h3>My Links</h3>
                <ul>
                    <li><a href='https://www.github.com/kostadinov1'>SoftUni</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>             

                </div>
            </section>



            <section className='info'>
                <div className='info-left'>
                    <h1>About Me</h1>
                    <p>
                        I am a full time professional working in London, UK, for the last 10 years. I am studying web developement at <a href='https://www.softuni.bg'>SoftUni</a>  Bulgaria.
                    </p>
                </div>
                <div className='info-right'>

                <img src={'../../'} alt=''></img> 

                </div>
            </section>
        </section>
    )
}

export default Home