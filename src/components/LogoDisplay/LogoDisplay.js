import React from 'react'
import Logo from '../Images/Logo3.png'
import './LogoDisplay.css'


function LogoDisplay() {
    return (
        <div className="content_container-1">
        <div className="image_div">
            <img className="logo" src={Logo} alt="" />
        </div>
        <div className="bullet_points">
        <ul>
         <li className="h3"><h1>Custom Software & Design</h1></li>

         <li className="list_item">Corporate to Personal Websites</li>
         <li className="list_item">Enterprise Level Applications</li>
         <li className="list_item">Custom Corperate Software</li>
         <li className="list_item">Marketing, branding, and more!</li>
        </ul>
        </div>
        </div>
    )
}

export default LogoDisplay
