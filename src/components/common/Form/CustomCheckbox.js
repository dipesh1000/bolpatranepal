import React from 'react';
import { Form } from 'react-bootstrap';

const CustomCheckbox = ({ label, field, form, ...props }) => {
  return (
    <div>
      <Form.Check type="checkbox" label={label} />
    </div>
  );
};

export default CustomCheckbox;
