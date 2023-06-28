import './App.css'
import './App-responsive.css'
import {Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
// import PersonalZone from './components/PersonalZone/PersonalZone'
import Login from './components/Login/Login';
import Header from './components/Main/Header/Header'; 
import Footer from './components/Main/Footer/Footer';

import './i18n.js'

const App = () => {
    return (
        <section id='body'>
          <Header />
          <main>
            <Routes >
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
