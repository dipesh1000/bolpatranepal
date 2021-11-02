import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
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
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default CustomSlider;
