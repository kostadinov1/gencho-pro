import './App.css'
import './App-responsive.css'
import {Link, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
import PersonalZone from './components/PersonalZone/PersonalZone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBars, faHouseChimney, faTerminal, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Login from './components/Login/Login';
import { CodeOutlined } from '@ant-design/icons';


const App = () => {
    return (
        <section id='body'>
          <header className='nav-bar'>
              <img id='logo' alt='' src={'/images/icons/icon-0.svg'}  />
              <h1>gencho</h1>
              <ul className='nav-bar-links'>
                <li>
                  <Link to={'/'} className={'nav-bar-link'}>
                      <FontAwesomeIcon icon={faHouseChimney} className={'nav-bar-icon'}/>
                        <span>Home</span>
                  </Link>
                </li>
                <li>
                <Link to={'/projects'} className={'nav-bar-link'}>
                      <CodeOutlined className={'nav-bar-icon'}/>
                        <span>Projects</span>
                  </Link>
                </li>
                <li>
                <Link to={'/contacts'} className={'nav-bar-link'}>
                      <FontAwesomeIcon icon={faAt} className={'nav-bar-icon'}/>
                        <span>Contacts</span>
                  </Link>
                </li>
                <li>
                <Link to={'/login'} className={'nav-bar-link'}>
                      <FontAwesomeIcon icon={faUserSecret} className={'nav-bar-icon'}/>
                        <span>Login</span>
                  </Link>
                </li>
              </ul>
              <FontAwesomeIcon icon={faBars} id='nav-bar-menu-icon'/>
          </header>
          <main>
            <Routes >
              {/* Menu */}
              <Route path='/' element={<Home />}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/login' element={<Login />}/>
            </Routes>
          </main>
          <footer>
            <div className='footer-list-box'>
            <h5>Useful Links</h5>
                <ul>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>DockerHub</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>             
            </div>
            <div className='footer-list-box'>
                <h5>Useful Links</h5>
                <ul>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>DockerHub</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>
            </div>            
            <div className='footer-list-box'>
            <h5>Useful Links</h5>
                <ul>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>DockerHub</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>             
            </div>
          </footer>
        </section>

  
  );
};
export default App;
