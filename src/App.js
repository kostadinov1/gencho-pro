// import 'antd/dist/reset.css';
import './App.css'
import {Link, Route, Routes } from 'react-router-dom';
import React from 'react';


import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
import PersonalZone from './components/PersonalZone/PersonalZone'


const App = () => {

  return (
        <section id='body'>
          <header className='nav-bar'>
              <i id='logo' />
              <h1>gencho.pro</h1>
              <ul className='nav-bar-links'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/contacts'}>Contacts</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
              {/* <button className='login-btn' >Login</button> */}
          </header>
          <main>
            <Routes >
              {/* Menu */}
              <Route path='/' element={<Home />}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/login' element={<PersonalZone />}/>
            </Routes>
          </main>
          <footer>
            <div>
            <h3>Footer</h3>
                <ul>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>LinkedIn</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                    <li><a href='https://www.github.com/kostadinov1'>Github</a></li>
                </ul>             

            </div>
          </footer>
        </section>

  
  );
};
export default App;
