import React from 'react';
import SearchSection from '../SearchSection/SearchSection';
import bannerImg from '../../images/banner.png';
import CustomBtn from '../CustomBtn';

function Banner() {
  return (
    <>
      <div
        className="bannerSection"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 38.82%, rgba(0, 0, 0, 0.24) 69.97%, rgba(0, 0, 0, 0) 100.32%), url(${bannerImg})`,
        }}
      >
        <div className="content_box">
          <div className="main_content">
            <h1>
              A Platform for All <b>Procurement</b> Activities
            </h1>
            <p>
              Bolpatra Nepal is a Platform for All Procurement Activities of
              Government of Nepal.
            </p>
          </div>
        </div>
        <SearchSection />
        <div className="content_box">
          <div className="custonBtnGroup">
            <CustomBtn btnType="primary">Request for Quote</CustomBtn>
            <CustomBtn btnType="outline-light">Local Tender Search</CustomBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
