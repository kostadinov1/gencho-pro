
import React from 'react'
import './hero.css'
import Cube from '../../Custom/Cube/Cube'

function Hero() {
  return (
    <div>
       <section className='hero'>
                <div className='hero-left'>
                    <div className='title-box'>
                        <h1>Hi!</h1>
                        <h1> I'm Evgeni.</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <div className='hero-right'>                
                </div>
                    <Cube />
                <div className='photo-credit-box'>
                <a href="https://pixabay.com/users/tungnguyen0905-17946924/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6701504">Image by Tung Nguyen</a>
                <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6701504">at Pixabay</a>
                    </div>
            </section>

    </div>
  )
}

export default Hero
