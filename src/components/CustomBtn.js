import React from 'react';
import { Button } from 'react-bootstrap';

const CustomBtn = ({ btnType, children }) => {
  return (
    <Button type="button" variant={btnType} className="customBtn">
      {children}
    </Button>
  );
};

export default CustomBtn;
