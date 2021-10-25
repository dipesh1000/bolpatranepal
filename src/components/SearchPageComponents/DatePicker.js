import React from 'react';
import { Form } from 'react-bootstrap';

const DatePicker = () => {
  return (
    <>
      <div className="filter_title">Date</div>
      <Form.Control type="date" className="customDatePicker" />
      <Form.Control type="date" className="customDatePicker" />
    </>
  );
};

export default DatePicker;
