import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BidBox from './LeftAsideBox/BidBox';
import MainContainer from './MainContainer/MainContainer';
import UserLinks from './RightAsideBox/UserLinks';
import './styles/styles.scss';

const Dashboard = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Dashboard;
