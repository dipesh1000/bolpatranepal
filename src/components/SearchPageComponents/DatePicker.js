import { Field } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';

const DatePicker = ({ CustomDateInput }) => {
  return (
    <>
      <div className="filter_title">Date</div>
      <Field name="date_from" component={CustomDateInput} />
      <Field name="date_to" component={CustomDateInput} />
    </>
  );
};

export default DatePicker;
