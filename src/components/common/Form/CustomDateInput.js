import React from 'react';
import { Form } from 'react-bootstrap';

const CustomDateInput = ({ field, form, ...props }) => {
  console.log(field, 'From Field in Custom Input');
  return (
    <div>
      <Form.Control
        type="date"
        {...props}
        {...field}
        className="customDatePicker"
      />
    </div>
  );
};

export default CustomDateInput;
