import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';

const OurTeamSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container>
            <style type="text/css">
                {`
                .slick-list{
                    margin: 0 -17px!important;
                }
                .slick-slide > div {
                    margin: 0 17px!important;
                }
                `}
            </style>
            <Slider {...settings}>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider_holder">
                        <div className='image_holder'></div>
                        <div className="text_container">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </Container>

    );
}

export default OurTeamSlider
