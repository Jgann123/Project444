import React from 'react'
import './NavBar.css'
import logo from '../Images/nav.png'
import PhoneIcon from '@material-ui/icons/Phone';




function NavBar() {
    return (
        <nav className="nav_bar">
          <img className="nav_logo" src={logo} alt="" />
          <ul className="ul">
          <li className="ul"><a className="ul2" href="tel:8654240143">Call Us Today!<br></br><PhoneIcon /> 865-424-0143</a>
          <a className="a"  href="https://www.facebook.com/SoftSquare-103373721950858/?ref=pages_you_manage"><i id="facebook" class="facebook icon"></i></a>
          <a className="a" href = "mailto: contact@softsquare.com"> <i id="facebook" class="envelope icon"></i></a>
          </li>
        </ul>
        </nav>
    )
}

export default NavBar
