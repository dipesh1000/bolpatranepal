import React from 'react';
import { Form } from 'react-bootstrap';

const CustomSelect = ({ field, data, form, ...props }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <>
          <Form.Control as="select" {...props} {...field}>
            {data &&
              data.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
          </Form.Control>
        </>
      </Form.Group>
    </>
  );
};

export default CustomSelect;
