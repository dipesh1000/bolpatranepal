import React from 'react';
import SingleProcrument from '../../components/Procrument/SingleProcrument';
import SinglePageSection from '../../components/SinglePageSection/SinglePageSection';
import HomeLayouts from '../../layouts/HomeLayouts';

const SinglePage = () => {
  return (
    <HomeLayouts>
      <div className="singlePage" style={{ minHeight: 300 }}>
        <SingleProcrument />
      </div>
    </HomeLayouts>
  );
};

export default SinglePage;
