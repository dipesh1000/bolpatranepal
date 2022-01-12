import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Procruments } from '../../FakeData/Procruments';
import ProcrumentItem from './ProcrumentItem';
import ProcurementLists from './ProcurementLists';
import { getTenderList } from './redux/Procrument.action';

const Procrument = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState();
  useEffect(() => {
    dispatch(getTenderList(page));
  }, [page]);

  const procrument = useSelector((state) => state.procrument);

  let active = procrument?.data?.tenders?.pagination?.current_page;
  let totalPage = procrument?.data?.tenders?.pagination?.total_pages;
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <div className="procruments_container">
        <div className="main_titles">Published Today</div>

        {procrument?.loading ? (
          <div className="loading_Container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <ProcurementLists procrument={procrument?.data?.tenders?.data} />
            <Pagination>{items}</Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default Procrument;
