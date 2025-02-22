import React from 'react';
import HeroSection from '../../components/LandingPageCom/HeroSection';
import Navbar from '../../components/LandingPageCom/Navbar';
import OurServices from '../../components/LandingPageCom/OurServices';
import About from '../../components/LandingPageCom/About'; 
import Contact from '../../components/LandingPageCom/Contact';
import FooterLan from '../../components/LandingPageCom/FooterLan';

function LandingPage(){
    return (
        <div className="landing-page">
            <div className="landing-container">
                <Navbar/>
                <HeroSection/>
                <OurServices/>
                <About/>
                <Contact/>
                <FooterLan/>
            </div>
        </div>
    );
};

export default LandingPage;