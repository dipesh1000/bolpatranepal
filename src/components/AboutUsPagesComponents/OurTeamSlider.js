import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Team1 from '../../images/aboutUsImage/team1.jpg';
import Team2 from '../../images/aboutUsImage/team2.jpg';
import Team3 from '../../images/aboutUsImage/team3.jpg';
import Team4 from '../../images/aboutUsImage/team4.jpg';
import CustomSlider from '../common/CustomSlider';

const OurTeamSlider = () => {
  const data = [
    {
      image: Team1,
      name: 'Robin Scherbatsky',
      position: 'Proffesor, Architect',
    },
    {
      image: Team2,
      name: 'Lily Alderin',
      position: 'Interior Designer',
    },
    {
      image: Team3,
      name: 'Marshal Erikson',
      position: 'Leader of a group',
    },
    {
      image: Team4,
      name: 'Ted Mosby',
      position: 'Proffesor, Architect',
    },
    {
      image: Team1,
      name: 'Robin Scherbatsky',
      position: 'Proffesor, Architect',
    },
    {
      image: Team2,
      name: 'Lily Alderin',
      position: 'Interior Designer',
    },
    {
      image: Team3,
      name: 'Marshal Erikson',
      position: 'Leader of a group',
    },
    {
      image: Team4,
      name: 'Ted Mosby',
      position: 'Proffesor, Architect',
    },
    {
      image: Team1,
      name: 'Robin Scherbatsky',
      position: 'Proffesor, Architect',
    },
    {
      image: Team2,
      name: 'Lily Alderin',
      position: 'Interior Designer',
    },
    {
      image: Team3,
      name: 'Marshal Erikson',
      position: 'Leader of a group',
    },
    {
      image: Team4,
      name: 'Ted Mosby',
      position: 'Proffesor, Architect',
    },
  ];

  return (
    <Container>
      <CustomSlider>
        {data?.map((data) => (
          <div>
            <div className="slider_holder">
              <div className="image_holder">
                <img src={data.image} alt="" />
              </div>
              <div className="text_container">
                <h4>{data.name}</h4>
                <p>{data.position}</p>
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </Container>
  );
};

export default OurTeamSlider;
