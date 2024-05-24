import React from 'react'
import logo from './netflixlogo.png';
import avatar from './images.png'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <img className='net' src={logo} />
        <img className='ava' src={avatar}/>
    </div>
  )
}

export default NavBar
