
import React from 'react'
import Tim from './tim.PNG'
import Jeremy from './jeremy.jpeg'
import './Founders.css'
function Founders() {
    return (
        <div className="main_div">
    <div className="images_div">
        <div className="image_div3">
         <img style={{width: 100, height: 100,}} id="jeremy" src={Jeremy} alt="" />
         <div className="p_div2">
         <p id="p-tag"></p>
         </div>
        </div>
        <div className="image_div3">
         <img style={{width: 100, height: 100}} id="tim"  src={Tim} alt="" />
         <div className="p_div2">
         <p id="p-tag"></p>
         </div>
        </div>
      </div>
      </div>
    )
}

export default Founders
