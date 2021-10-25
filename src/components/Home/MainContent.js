import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ads1 from '../../images/ads1.png';
import Ads2 from '../../images/ads2.png';
import Ads3 from '../../images/ads3.png';
import ProcurementLists from './ProcurementLists';

const MainContent = () => {
  return (
    <>
      <div className="main_content_box">
        <Container>
          <Row>
            <Col sm={3}>
              <img src={Ads2} alt="Ads image" width="100%" />
            </Col>
            <Col sm={9}>
              <ProcurementLists />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainContent;
