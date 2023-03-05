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
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <section id='body'>
          <Header />
          <main>
            <Routes >
              {/* Menu */}
              <Route path='/' element={<Home />}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/login' element={<Login />}/>
            </Routes>
          </main>
          <Footer />
        </section>

  
  );
};
export default App;
