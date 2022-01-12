import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ads1 from '../../images/ads1.png';
import Ads2 from '../../images/ads2.png';
import Ads3 from '../../images/ads3.png';
import Procrument from '../Procrument/Procrument';
import ProcurementLists from '../Procrument/ProcurementLists';
import FilterAside from '../SearchPageComponents/FilterAside';

const MainContent = () => {
  return (
    <>
      <div className="main_content_box">
        <Container>
          <Row>
            <Col sm={3}>
              <FilterAside />
            </Col>
            <Col sm={6}>
              <Procrument />
            </Col>
            <Col sm={3}>
              <div className="ads_aside">
                <img src={Ads2} alt="Ads image" width="100%" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainContent;
