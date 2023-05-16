import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import './index.css'

function Header() {
  const [clicked, setClicked] = useState(0) 
  const [press, setPress] = useState(0)
  const [left, setLeft] = useState(0)

  
  const handleClick = () =>{
    setClicked(clicked + 1)
    alert(`Button Clicked ${clicked + 1} times`)
  }
  const pressClick = () =>{
    setPress(press + 1)
    alert(`Button Clicked ${press + 1} times`)
  }
  const leftClick = () =>{
    setLeft(left + 1)
    alert(`Button Clicked ${left + 1} times`)
  }

  return (
    <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li onClick = {handleClick}><Link to="/" className='home'>Home</Link></li>|
          <li onClick= {pressClick}><Link to="/about" className='home'>About</Link></li>|
          <li onClick = {leftClick}><Link to="/contact" className='home'>Contact</Link></li>|
        </ul>
      </nav>
    </header>
  );
}

export default Header;
