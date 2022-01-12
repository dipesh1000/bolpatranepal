import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BidBox from '../LeftAsideBox/BidBox';
import UserInfoBox from '../MainContainer/UserInfoBox';
import UserLinks from '../RightAsideBox/UserLinks';
import InterestDetails from './InterestDetails/InterestDetails';

const InterestIndex = () => {
  return (
    <Row>
      <Col md={3}>
        <BidBox />
      </Col>
      <Col>
        <UserInfoBox />
        <InterestDetails />
      </Col>
      <Col md={3}>
        <UserLinks />
      </Col>
    </Row>
  );
};

export default InterestIndex;
