import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeLayouts from '../../layouts/HomeLayouts';
import DashContainer from './DashContainer';

const Dashboard = () => {
  return (
    <HomeLayouts>
      <div className="dashboard_wrapper">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col>
              <DashContainer />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    </HomeLayouts>
  );
};

export default Dashboard;
