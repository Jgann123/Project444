
import React from 'react'
import './WhyUs.css'
import Founders from '../Founders/Founders'

function WhyUs() {
    return (
        <div id="main">
        <div id="2">
        <div className="why_us_container">
            <h1 id="h1">About Us...</h1>
            <div className="par_container">
            <p id="par">Softquare Software Solutions was established early 2021. The company was built on 
                solid foundational core values that reflect integrity and honor. It is our goal to 
                serve others with sincerity and honesty. The founders are East Tennessee native family men who 
                carry a high value for legacy. Both experienced developers who have had the privledge to serve companies in
                their local area have combined their skillset and network to build SoftSquare. Our innitiative is to serve. Success is a 
                result of making other people successful with a sincere heart to give our abilities and talents to others with honesty and passion.</p>
        </div>
        </div>
        </div>
        <Founders />
        </div>
    )
}

export default WhyUs
