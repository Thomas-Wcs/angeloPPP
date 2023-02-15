import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className='navbar'>
    <ul>
      <NavLink to='/'>
        <li>Accueil</li>
      </NavLink>
      <NavLink to='/about'>
        <li>About</li>
      </NavLink>
      <NavLink to='/formulaire'>
        <li>Contact</li>
      </NavLink>
    </ul>
  </nav>
);

export default NavBar;
