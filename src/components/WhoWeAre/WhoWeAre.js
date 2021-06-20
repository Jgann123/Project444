import React from 'react'
import './WhoWeAre.css'
import Rocket from './cool2.png'
import ModalDisplay from '../Modal/ModalDisplay'

const  WhoWeAre = () => {
  
    return (
        <div  className0="wrapper-div">
       
        <div className="details">
            <h1 className="details_headline">Services Tailor-Made for your business</h1>
    
            <p className="details_p">"We build custom software that is specifically designed to target the challenges and needs of your business.
                With cross-functionail teams we work with you every step of the process to design, build, and launch
                just what your business needs, delivering technology-driven products, services, and systems to
                solve your biggest to smallest problems. It is our aim to serve our customers with excellence. 
                We know the most successful people are the most selfless, and we make it our aim to see our customers succeed
                by providing our technical services with honestly and excellence. "</p>
            
        </div>
        <strong><button className="Oest_button">  <ModalDisplay /> </button></strong>
        <img  className="rrocket" src={Rocket} alt="" />
        <hr></hr>
        </div>
  
    )
}

export default WhoWeAre
