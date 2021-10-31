import React from 'react';
import banner from '../../../images/aboutUsImage/header.jpg';

const Banner = ({pages,heading,message}) => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <div className="banner_text">
                <p>{pages}</p>
                <h1>{heading}</h1>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Banner
