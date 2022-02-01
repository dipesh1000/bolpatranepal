import React from 'react';
import { Pagination, Spinner } from 'react-bootstrap';
import ProcurementLists from './ProcurementLists';

const Procrument = ({ isLoading, procrument, items, title }) => {
  // console.log(procrument, 'From procrument');
  return (
    <div>
      <div className="procruments_container">
        <div className="main_titles">{title}</div>

        {isLoading ? (
          <div className="loading_Container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <ProcurementLists procrument={procrument} />
            <Pagination>{items}</Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default Procrument;
