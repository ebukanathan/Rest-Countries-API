import React from 'react'
import "./Header.scss"
import { NavLink} from 'react-router-dom'

function Header({toggleDarkMode,isDarkMode}) {
  return (
    <div className='header'>
        <NavLink to ='/'><h3>Where in the World?</h3></NavLink>
        <div className="color-mode">
            <button onClick={toggleDarkMode}>{isDarkMode?'Light Mode':'Dark Mode'}</button>
        </div>
        
    </div>
  )
}

export default Header