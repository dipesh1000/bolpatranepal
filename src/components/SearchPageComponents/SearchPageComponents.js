import React, { useEffect } from 'react';
import './styles/styles.scss';
import SearchPageBanner from './SearchPageBanner';
import SearchingContent from './SearchingContent';
// import { useSelector } from 'react-redux';

const SearchPageComponents = () => {
  // const searchList = useSelector((state) => state.searchList);
  // console.log(searchList, 'from Search List');
  return (
    <>
      <div className="main_search_component_box">
        <SearchPageBanner />
        <SearchingContent />
      </div>
    </>
  );
};

export default SearchPageComponents;
