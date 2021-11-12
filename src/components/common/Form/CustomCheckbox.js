import React from 'react';
import { Form } from 'react-bootstrap';

const CustomCheckbox = ({ label, field, form, ...props }) => {
  console.log(field, 'from field in checkbox');
  return (
    <div>
      <Form.Check {...props} {...field} type="checkbox" label={label} />
    </div>
  );
};

export default CustomCheckbox;
