import React from 'react'
import Image from './res.png'
import './CardDisplay.css'
import icon from './icon.png'
import ModalDisplay from '../Modal/ModalDisplay'

function CardDisplay(props) {
    return (
        <div>
       
        <div className="services_card">
             <div className="icon">{props.icon}</div>
            <div className="card_container">
            <h2 className="h2">{props.CardTitle}</h2>
          
            <p>{props.Content}</p>

                 <strong><button className="est_button">  <ModalDisplay /> </button></strong>
                 </div>
        </div>
        </div>
    )
}

export default CardDisplay
