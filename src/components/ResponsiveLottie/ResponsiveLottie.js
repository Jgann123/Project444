import { blue } from '@material-ui/core/colors';
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Images/Responsive.json'



function ResponsiveLottie() {
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
        height={120}
        width={120}
        color={blue}
      />
            
        </div>
    )
}

export default ResponsiveLottie;