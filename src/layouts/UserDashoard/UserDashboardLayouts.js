import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const UserDashboardLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <div className="dashboard_wrapper">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboardLayouts;
