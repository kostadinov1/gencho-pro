import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


function Header() {
  return (
    <header className='nav-bar'>
        <img id='logo' alt='' src={'/images/icons/icon-0.svg'}  />
        <h1>gencho</h1>
        <ul className='nav-bar-links'>
        <li>
            <Link to={'/'} className={'nav-bar-link'}>
                <span>Home</span>
            </Link>
        </li>
        <li>
        <Link to={'/projects'} className={'nav-bar-link'}>
                <span>Projects</span>
            </Link>
        </li>
        <li>
        <Link to={'/contacts'} className={'nav-bar-link'}>
                <span>Contacts</span>
            </Link>
        </li>
        <li>
        <Link to={'/login'} className={'nav-bar-link'}>
                <span>Login</span>
            </Link>
        </li>
        </ul>
    </header>
  )
}

export default Header
