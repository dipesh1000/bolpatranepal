import React from 'react';
import WishList from '../../../components/WishList';
import UserDashboardLayouts from '../../../layouts/UserDashoard/UserDashboardLayouts';

const WishListPage = () => {
  return (
    <UserDashboardLayouts>
      <WishList />
    </UserDashboardLayouts>
  );
};

export default WishListPage;
