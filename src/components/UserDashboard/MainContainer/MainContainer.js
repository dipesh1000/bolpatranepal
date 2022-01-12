import React from 'react';
import UserAboutBox from '../UserAboutBox/UserAboutBox';
import UserInfoBox from './UserInfoBox';

const MainContainer = () => {
  return (
    <div>
      <UserInfoBox />
      <UserAboutBox />
    </div>
  );
};

export default MainContainer;
