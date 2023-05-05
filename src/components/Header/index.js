import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>|
          <li><Link to="/about">About</Link></li>|
          <li><Link to="/contact">Contact</Link></li>|
        </ul>
      </nav>
    </header>
  );
}

export default Header;
