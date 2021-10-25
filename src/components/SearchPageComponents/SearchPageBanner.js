import React from 'react';
import CustomBtn from '../CustomBtn';
import SearchSection from '../SearchSection/SearchSection';
import bannerImg from '../../images/banner.png';

const SearchPageBanner = () => {
  return (
    <div
      className="searchBanner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <SearchSection />
      <div className="content_box">
        <div className="custonBtnGroup">
          <CustomBtn btnType="primary">Request for Quote</CustomBtn>
          <CustomBtn btnType="outline-light">Local Tender Search</CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default SearchPageBanner;
