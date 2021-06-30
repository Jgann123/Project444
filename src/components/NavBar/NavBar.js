import React from 'react'
import './NavBar.css'
import logo from '../Images/nav_logo3.png'
import LottieDisplay from '../Lottie/LottieDisplay';




function NavBar() {
  
    return (
        <nav className="nav_bar">
     <div className="lot">   <LottieDisplay className="lot" /></div>
          <img className="nav_logo" src={logo} alt="" />
         
          <ul className="ul">
          
          <li className="ul"><a className="ul2" href="tel:8654846510"><br></br><i id="telly" class="phone icon"></i></a>
          <a className="a"  href="https://www.facebook.com/SoftSquare-103373721950858/?ref=pages_you_manage"><i id="facebook" class="facebook icon"></i></a>
          <a className="a" href = "mailto: contact@softsquare.tech"> <i id="facebook" class="envelope icon"></i></a>
          
          </li>
        </ul>
        </nav>
    )
}

export default NavBar
