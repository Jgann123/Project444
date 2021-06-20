
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
         <em>"Dont Spend your life on building something for yourselfs, spend it giving your life away for something greater."</em>
         <p id="p-tag"><br></br>
            Jeremy is a husband and father who is East TN native. As a Software Engineer and business owner he cares deeply about others and serving his community. He is a problem solver who is dedicated to making the<br></br>
            most out of life by giving where he can. With experience building enterprise software for advertsing agencies, and freelance web designs. His 
            language of choice is JavaScript using a M.E.R.N. stack building robust Designs and programs for corporations and independents.  </p>
         </div>
        </div>
        <div className="image_div3">
         <img style={{width: 100, height: 100}} id="tim"  src={Tim} alt="" />
         <div className="p_div2">
         <em>"I ask only one thing, Lord:
         Let me live in your house
             every day of my life
             to see how wonderful you are
             and to pray in your temple.."</em>
         <p id="p-tag"><br></br>Tim Bishop is a pssionate father and husband who has a knack for innovation. With years of experience in business
                        development and technology, he is an asset to SoftSquare. Tim is also East TN native and has had the privledge to serve 
                        government agency software companies with a high level security clearence and a deep intellect in programming and problem-solving.
                        Tim specializes in C# .NET applications. 
                        </p>
         </div>
        </div>
      </div>
      </div>
    )
}

export default Founders
