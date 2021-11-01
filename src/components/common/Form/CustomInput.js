import React from 'react';
import { Form } from 'react-bootstrap';

const CustomInput = ({ field, form, ...props }) => {
  console.log(field, 'From Field in Custom Input');
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Control {...props} {...field} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default CustomInput;
