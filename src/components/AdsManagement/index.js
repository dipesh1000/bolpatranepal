import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAds } from './redux/actions';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const AdsManagement = () => {
  const { data, isLoading } = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  console.log(data, isLoading, 'from ads in ads management');
  useEffect(() => {
    dispatch(getAllAds());
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <Slider {...settings}>
          {data?.ads?.length > 0 &&
            data?.ads
              ?.filter((i) => i.type === 'Width-Type')
              ?.map((item, index) => (
                <div className="ads_image_container" key={index}>
                  <a target="_blank" href={item?.link}>
                    <img src={item?.image} />
                  </a>
                </div>
              ))}
        </Slider>
      )}
    </>
  );
};
