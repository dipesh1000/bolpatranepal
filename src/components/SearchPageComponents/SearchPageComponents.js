import React, { useEffect } from 'react';
import './styles/styles.scss';
import SearchPageBanner from './SearchPageBanner';
import SearchingContent from './SearchingContent';
import { useSelector } from 'react-redux';

const SearchPageComponents = () => {
  const searchList = useSelector((state) => state.searchList);
  console.log(searchList, 'from Search List');
  return (
    <>
      <div className="main_search_component_box">
        <SearchPageBanner />
        <SearchingContent
          searchList={
            searchList &&
            searchList.data &&
            searchList.data.tenders &&
            searchList.data.tenders.data
          }
          loading={searchList.loading}
        />
      </div>
    </>
  );
};

export default SearchPageComponents;
