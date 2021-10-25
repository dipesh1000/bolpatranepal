import React from 'react';
import banner from '../../../images/aboutUsImage/header.jpg';
import './style/AboutUsBanner.scss';

const AboutUsBanner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
        </div>
    )
}

export default AboutUsBanner
