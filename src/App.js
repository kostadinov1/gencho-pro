// import 'antd/dist/reset.css';
import './App.css'
import {Link, Route, Routes } from 'react-router-dom';
import React from 'react';


import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
import PersonalZone from './components/PersonalZone/PersonalZone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from './components/PersonalZone/Login';


const App = () => {

  return (
        <section id='body'>
          <header className='nav-bar'>
              <img id='logo' alt='' src={'/images/logos/craiyon_logo_3.ico'}  />
              <h1>gencho</h1>
              <ul className='nav-bar-links'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/contacts'}>Contacts</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
              {/* <button className='login-btn' >Login</button> */}
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
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>             
            </div>
          </footer>
        </section>

  
  );
};
export default App;
