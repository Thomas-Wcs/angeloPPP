import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='navbar'>
    <ul>
      <li>
        <Link to='/'>Accueil</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/formulaire'>Contact</Link>
      </li>
      <li>
        <Link to='/pageTest'>Test Page</Link>
      </li>
      <li>
        <Link to='/Test2'>Test 2</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
