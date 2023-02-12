// import 'antd/dist/reset.css';
import {Link, Route, Routes } from 'react-router-dom';
import React from 'react';


import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'
import PersonalZone from './components/PersonalZone/PersonalZone'


const App = () => {

  return (
        <section>
          <header>
              <ul className='nav-bar'>
                <li><Link>Home</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Contacts</Link></li>
                <li><Link>Personal-Zone</Link></li>

              </ul>
          </header>
          <main>
            <Routes >
              {/* Menu */}
              <Route path='/' element={<Home />}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/personal-zone' element={<PersonalZone />}/>
            </Routes>
          </main>
          <footer>

          </footer>
        </section>

  
  );
};
export default App;
