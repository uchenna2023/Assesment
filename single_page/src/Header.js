import React from 'react'
import UCHENNA from '../src/Assert/UCHENNA.png'

const Header = () => {
  return (
        <div className='nav-container'>
        <img src={UCHENNA} alt=''/>
        <nav className='nav'>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </nav>
    </div>
  )
}

export default Header