import React from 'react';
import SinglePageSection from '../components/SinglePageSection/SinglePageSection';
import HomeLayouts from '../layouts/HomeLayouts';

const SinglePage = () => {
  return (
    <HomeLayouts>
      <div className="singlePage" style={{ minHeight: 300 }}>
        <SinglePageSection />
      </div>
    </HomeLayouts>
  );
};

export default SinglePage;
