import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Procruments } from '../../FakeData/Procruments';
import ProcrumentItem from './ProcrumentItem';

const ProcurementLists = () => {
  console.log(Procruments, 'From Procrument List');
  return (
    <div>
      <div className="procruments_container">
        <div className="main_titles">Published Today</div>
        <Row>
          {Procruments.map((item, index) => (
            <Col sm="6" key={index}>
              <ProcrumentItem data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProcurementLists;
