import React from 'react';
import './styles/styles.scss';
import SearchPageBanner from './SearchPageBanner';
import SearchingContent from './SearchingContent';

const SearchPageComponents = () => {
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
