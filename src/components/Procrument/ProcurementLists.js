import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Procruments } from '../../FakeData/Procruments';
import ProcrumentItem from './ProcrumentItem';
import { getTenderList } from './redux/Procrument.action';

const ProcurementLists = ({ procrument }) => {
  const ads = useSelector((state) => state.ads);
  return (
    <div>
      <Row>
        {ads?.data?.ads
          ?.filter((i) => i?.type === 'Width-Type')
          .splice(1, 1)
          .map((j, index) => (
            <Col sm="12" key={index}>
              <img width="100%" className="mb-3" src={j.image} />
            </Col>
          ))}
      </Row>
      <Row>
        {procrument?.length &&
          procrument?.slice(0, 3)?.map((item, index) => (
            <Col sm="12" key={index}>
              <ProcrumentItem data={item} />
              {/* <ProcrumentItem
                  published={item.publication_date}
                  id={item.id}
                  title={item.title}
                /> */}
            </Col>
          ))}
      </Row>
      <Row>
        {ads?.data?.ads
          ?.filter((i) => i?.type === 'Width-Type')
          .splice(0, 1)
          .map((j, index) => (
            <Col sm="12" key={index}>
              <img width="100%" className="mb-3" src={j.image} />
            </Col>
          ))}
      </Row>
      <Row>
        {procrument?.length &&
          procrument?.slice(3, 6)?.map((item, index) => (
            <Col sm="12" key={index}>
              <ProcrumentItem data={item} />
              {/* <ProcrumentItem
                  published={item.publication_date}
                  id={item.id}
                  title={item.title}
                /> */}
            </Col>
          ))}
      </Row>
      <Row>
        {ads?.data?.ads
          ?.filter((i) => i?.type === 'Width-Type')
          .splice(2)
          .map((j, index) => (
            <Col sm="12" key={index}>
              <img width="100%" className="mb-3" src={j.image} />
            </Col>
          ))}
      </Row>
      <Row>
        {procrument?.length &&
          procrument?.slice(6, 10)?.map((item, index) => (
            <Col sm="12" key={index}>
              <ProcrumentItem data={item} />
              {/* <ProcrumentItem
                  published={item.publication_date}
                  id={item.id}
                  title={item.title}
                /> */}
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ProcurementLists;
