import React from 'react';
import CustomBtn from '../CustomBtn';
import SearchSection from '../SearchSection/SearchSection';
import bannerImg from '../../images/banner.png';
import { AdsManagement } from '../AdsManagement';

const SearchPageBanner = () => {
  return (
    <div
      className="searchBanner"
      // style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bannerImg})` }}
    >
      <AdsManagement />
    </div>
  );
};

export default SearchPageBanner;
