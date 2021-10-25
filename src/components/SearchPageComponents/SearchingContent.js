import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProcurementLists from '../Home/ProcurementLists';
import FilterAside from './FilterAside';

const SearchingContent = () => {
  return (
    <div className="main_content_box">
      <Container>
        <Row>
          <Col md={3}>
            <FilterAside />
          </Col>
          <Col md={9}>
            <div className="inner_content_box">
              <ProcurementLists />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchingContent;
