import React from 'react';
import DashboardComp from '../../../components/UserDashboard/Dashboard';
import UserDashboardLayouts from '../../../layouts/UserDashoard/UserDashboardLayouts';

const Dashboard = () => {
  return (
    <UserDashboardLayouts>
      <DashboardComp />
    </UserDashboardLayouts>
  );
};

export default Dashboard;
