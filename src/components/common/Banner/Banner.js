import React from 'react';
import banner from '../../../images/aboutUsImage/header.jpg';
import './style.scss';

const Banner = ({pages,heading,message,buttonText}) => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <div className="banner_text">
                <p>{pages}</p>
                <h1>{heading}</h1>
                <p>{message}</p>
                { buttonText &&
                <button className="banner_btn">{buttonText}</button>
                }
            </div>
        </div>
    )
}

export default Banner
