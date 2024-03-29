import './App.css'
import {Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login';
import Header from './components/Main/Header/Header'; 
import Footer from './components/Main/Footer/Footer';

import './i18n.js'
import Credits from './components/Credits/Credits';


const App = () => {

    return (
        <section className='body'>
			<Header />
			<main className='main'>
				<Routes >
				<Route path='/' element={<Home />}/>
				<Route path='/projects' element={<Projects/>}/>
				<Route path='/contacts' element={<Contacts/>}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/credits' element={<Credits />}/>
				</Routes>
			</main>
			<Footer />
        </section>

  );
};
export default App;
