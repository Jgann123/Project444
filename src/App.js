import LogoDisplay from "./components/LogoDisplay/LogoDisplay";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import React, { useState, useEffect } from 'react';
import { Icon } from "semantic-ui-react";
import BusinessIcon from '@material-ui/icons/Business';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import WhoAreWe from '../src/components/WhoWeAre/WhoWeAre'
import CardDisplay from '../src/components/cards/CardDisplay'
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import H1 from "./components/H1/H1";
import Footer from '../src/components/Footer/Footer'
import EmailForm from '../src/components/EmailForm/EmailForm'
import ModalDisplay from "./components/Modal/ModalDisplay";
import WhyUs from "./components/WhyChooseUs/WhyUs";
import Founders from "./components/Founders/Founders";



function App() {

  
  return (
    <div className="App">
    <NavBar />
    <div>
    <LogoDisplay className="lg" /><br></br>
    </div>
    <WhoAreWe />
    <H1 title="Who We Are" />
    <div className ="display">
    <CardDisplay icon={[ <ImportantDevicesIcon className="display" style={{ fontSize: '100px', color: 'color: rgb(0, 29, 190)'}} /> ]} CardTitle="Responsive Websites" Content="We offer custom websites and designs that are responsive. Ths means your site will be optimal on all devices. 
     With our team of passionate designers and developers, it is our desire to walk with you hand in hand to build and design exactly what you, or your company needs. 
    We are sincere about your success as well as ours." />
    
    <CardDisplay icon={[ <BusinessIcon className="display" style={{ fontSize: '100px', color: 'color: rgb(0, 29, 190)'}} /> ]} CardTitle="Enterprise Level Applications" Content="With our team of experienced developers we offer custom builds on an enterprise level as well. Integrating systems
    that can run any, to all phases of enterprise operations. We provide excellent tools for accounting, human recources, 
    lead, client, or patient aggregation employee time tracking services and more! " />

    <CardDisplay icon={[ <PhonelinkSetupIcon className="display" style={{ fontSize: '100px', color: 'color: rgb(0, 29, 190)'}} /> ]} CardTitle="Mobile Applications" Content="If you have an idea for an application, or would like to extend your business tools to mobile applications, we offer cross platform
    mobile applications as well using React-Native, Cordova, Ionic, and other programming tools to deploy your software on Android, and IOS devices on cross platform app stores." />
   
    </div>
    <WhyUs />
   
    <Footer />
    
    </div>
  );
}

export default App;
