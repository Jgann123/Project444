import { blue } from '@material-ui/core/colors';
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Images/FinalRocket.json'



function RocketLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className="lottie">
        <Lottie 
        className="lottie"
	    options={defaultOptions}
        height={420}
        width={420}
        color={blue}
      />
            
        </div>
    )
}

export default RocketLottie;
