import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserAboutDetails = ({ data, isLoading }) => {
  return (
    <div className="info_details">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <React.Fragment>
          <div className="info_row">
            <div className="info_row_title">Name</div>
            <div className="info_row_value">{data?.name}</div>
          </div>
          <div className="info_row">
            <div className="info_row_title">Phone Number</div>
            <div className="info_row_value">{data?.phone_no}</div>
          </div>
          <div className="info_row">
            <div className="info_row_title">Email</div>
            <div className="info_row_value">{data?.email}</div>
          </div>
          <div className="info_row">
            <div className="info_row_title">City</div>
            <div className="info_row_value">{data?.city}</div>
          </div>
          <div className="info_row">
            <div className="info_row_title">Provinces</div>
            <div className="info_row_value">{data?.province}</div>
          </div>
          <div className="info_row">
            <div className="info_row_title">Country</div>
            <div className="info_row_value">{data?.country}</div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserAboutDetails;
