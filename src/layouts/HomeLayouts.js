import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const HomeLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayouts;
