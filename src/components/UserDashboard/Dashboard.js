import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BidBox from './LeftAsideBox/BidBox';
import MainContainer from './MainContainer/MainContainer';
import UserLinks from './RightAsideBox/UserLinks';
import './styles/styles.scss';

const Dashboard = () => {
  return (
    <Row>
      <Col md={3}>
        <BidBox />
      </Col>
      <Col>
        <MainContainer />
      </Col>
      <Col md={3}>
        <UserLinks />
      </Col>
    </Row>
  );
};

export default Dashboard;
