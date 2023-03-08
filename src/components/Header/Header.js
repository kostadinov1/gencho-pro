import { HomeOutlined, PhoneOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import './header-responsive.css'


function Header() {
  return (
    <header className='nav-bar'>
        <img id='logo' alt='' src={'/images/icons/icon-0.svg'}  />
        <h1>Gencho</h1>
        <ul className='nav-bar-links'>
        <li>
            <Link to={'/'} className={'nav-bar-link'}>
                <HomeOutlined /><span>Home</span>
            </Link>
        </li>
        <li>
        <Link to={'/projects'} className={'nav-bar-link'}>
                <ProjectOutlined /><span>Projects</span>
            </Link>
        </li>
        <li>
        <Link to={'/contacts'} className={'nav-bar-link'}>
                <PhoneOutlined /><span>Contacts</span>
            </Link>
        </li>
        <li>
        <Link to={'/login'} className={'nav-bar-link'}>
                <UserOutlined /><span>Login</span>
            </Link>
        </li>
        </ul>
    </header>
  )
}

export default Header
