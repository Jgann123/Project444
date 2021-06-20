import React from 'react'
import './CardDisplay.css'
import ModalDisplay from '../Modal/ModalDisplay'

function CardDisplay(props) {
    return (
        <div>
       
        <div className="services_card">
             <div className="icon">{props.icon}</div>
            <div className="card_container">
            <h2 className="h2">{props.CardTitle}</h2>
          
            <p>{props.Content}</p>

                 <strong className="j"><button className="est_button">  <ModalDisplay /> </button></strong>
                 <strong className="consuuu"> <a className="a" href = "mailto: contact@softsquare.com">Free Consultation <i id="facebook" class="envelope icon"></i></a></strong>
                 </div>
        </div>
        </div>
    )
}

export default CardDisplay
