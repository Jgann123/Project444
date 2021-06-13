import React from 'react'
import './NavBar.css'
import logo from '../Images/nav.png'
import PhoneIcon from '@material-ui/icons/Phone';



function NavBar() {
    return (
        <nav className="nav_bar">
          <img className="nav_logo" src={logo} alt="" />
          <ul className="ul">
          <li className="ul"><a className="ul2" href="tel:8654240143">Call Us Today!<br></br><PhoneIcon /> 865-424-0143</a></li>
        </ul>
        </nav>
    )
}

export default NavBar
