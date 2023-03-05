
import React from 'react'
import './hero.css'
import Cube from '../../Custom/Cube/Cube'

function Hero() {
  return (
    <div>
       <section className='hero'>
                <div className='hero-left'>
                    <div className='title-box'>
                        <h1><h1 id='hi'>Hi!</h1> I'm Evgeni.</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <div className='hero-right'>                
                </div>
                    <Cube />
                <div className='photo-credit-box'>
                    <a href="https://unsplash.com/pt-br/@goumbik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by Lukas Blazek</a>
                    <a href="https://unsplash.com/photos/mcSDtbWXUZU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">on Unsplash</a>
                </div>
            </section>

    </div>
  )
}

export default Hero
