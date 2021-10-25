import React from 'react';
import banner from '../../../images/aboutUsImage/header.jpg';


const AboutUsBanner = () => {
    return (
        <div className="aboutUs_banner">
            <img src={banner} alt="banner" />
            <div className="banner_text">
                <p>About Us</p>
                <h1>We Are Bolpatra Nepal</h1>
            </div>
        </div>
    )
}

export default AboutUsBanner
