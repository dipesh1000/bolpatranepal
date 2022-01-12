import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CustomModal from '../CustomModal/CustomModal';
import SearchPageComponents from '../SearchPageComponents/SearchPageComponents';
import Banner from './Banner';
import MainContent from './MainContent';
import './styles/Home.scss';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* <Banner />
      <MainContent /> */}
      <SearchPageComponents />
    </div>
  );
};

export default Home;
