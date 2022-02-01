import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllAds } from '../AdsManagement/redux/actions';
import Procrument from '../Procrument/Procrument';
import FilterAside from '../SearchPageComponents/FilterAside';
import SearchPageBanner from '../SearchPageComponents/SearchPageBanner';
import { getUserWishList } from './redux/action';

const WishListMain = () => {
  const wishList = useSelector((state) => state.wishList);
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWishList());
  }, []);

  useEffect(() => {
    dispatch(getAllAds());
  }, []);

  return (
    <>
      <SearchPageBanner />
      <div className="main_content_box">
        <Container>
          <Row>
            <Col sm={3}>
              <FilterAside pageType="wishList" />
            </Col>
            <Col sm={6}>
              <Procrument
                isLoading={wishList?.isLoading}
                procrument={wishList?.data?.data}
              />
            </Col>
            <Col sm={3}>
              <div className="ads_aside">
                {ads.isLoading
                  ? 'loading'
                  : ads &&
                    ads.data &&
                    ads.data.ads &&
                    ads.data.ads
                      .filter((ad) => ad.type === 'Box-Type')
                      .map((item) => (
                        <Link to={item?.link}>
                          <img
                            className="mb-4"
                            src={item?.image}
                            alt="Ads image"
                            width="100%"
                          />
                        </Link>
                      ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WishListMain;
