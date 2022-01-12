import React from 'react';
import { Form } from 'react-bootstrap';

const CustomInput = ({ field, form, placeholder, ...props }) => {
  // console.log(field, 'From Field in Custom Input');
  return (
    <>
      <Form.Group className="mb-0">
        <>
          <Form.Control {...props} {...field} placeholder={placeholder} />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </>
      </Form.Group>
    </>
  );
};

export default CustomInput;
