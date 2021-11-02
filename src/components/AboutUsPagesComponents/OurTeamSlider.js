import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Team1 from '../../images/aboutUsImage/team1.jpg';
import Team2 from '../../images/aboutUsImage/team2.jpg';
import Team3 from '../../images/aboutUsImage/team3.jpg';
import Team4 from '../../images/aboutUsImage/team4.jpg';

const OurTeamSlider = () => {
    const data = [
        {
            image: Team1,
            name: "Robin Scherbatsky",
            position: "Proffesor, Architect"
        },
        {
            image: Team2,
            name: "Lily Alderin",
            position: "Interior Designer"
        },
        {
            image: Team3,
            name: "Marshal Erikson",
            position: "Leader of a group"
        },
        {
            image: Team4,
            name: "Ted Mosby",
            position: "Proffesor, Architect"
        },
        {
            image: Team1,
            name: "Robin Scherbatsky",
            position: "Proffesor, Architect"
        },
        {
            image: Team2,
            name: "Lily Alderin",
            position: "Interior Designer"
        },
        {
            image: Team3,
            name: "Marshal Erikson",
            position: "Leader of a group"
        },
        {
            image: Team4,
            name: "Ted Mosby",
            position: "Proffesor, Architect"
        },
        {
            image: Team1,
            name: "Robin Scherbatsky",
            position: "Proffesor, Architect"
        },
        {
            image: Team2,
            name: "Lily Alderin",
            position: "Interior Designer"
        },
        {
            image: Team3,
            name: "Marshal Erikson",
            position: "Leader of a group"
        },
        {
            image: Team4,
            name: "Ted Mosby",
            position: "Proffesor, Architect"
        },

    ];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
            </div>
        ),
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
                {data?.map(data => (
                    <div>
                        <div className="slider_holder">
                            <div className='image_holder'>
                                <img src={data.image} alt="" />
                            </div>
                            <div className="text_container">
                                <h4>{data.name}</h4>
                                <p>{data.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>

    );
}

export default OurTeamSlider
