import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Procrument from '../Procrument/Procrument';
// import { getTenderList } from '../Procrument/redux/Procrument.action';
import FilterAside from '../SearchPageComponents/FilterAside';

const MainContent = () => {
  // const dispatch = useDispatch();
  // const [page, setPage] = useState();
  // useEffect(() => {
  //   dispatch(getTenderList(page));
  // }, [page]);

  // const procrument = useSelector((state) => state.procrument);

  // let active = procrument?.data?.tenders?.pagination?.current_page;
  // let totalPage = procrument?.data?.tenders?.pagination?.total_pages;
  // let items = [];
  // for (let number = 1; number <= totalPage; number++) {
  //   items.push(
  //     <Pagination.Item
  //       onClick={() => setPage(number)}
  //       key={number}
  //       active={number === active}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <>
      <div className="main_content_box">
        <Container>
          <Row>
            <Col sm={3}>
              <FilterAside />
            </Col>
            <Col sm={6}>
              {/* <Procrument procrument={procrument} items={items} /> */}
            </Col>
            <Col sm={3}>
              {/* <div className="ads_aside">
                <img src={Ads2} alt="Ads image" width="100%" />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainContent;
