import React from 'react';
import { Form } from 'react-bootstrap';

const FilterCheckBox = ({ title }) => {
  return (
    <>
      <ul className="filter_checkbox_group">
        <li className="filter_title">{title}</li>
        <li>
          <Form.Check type="checkbox" label="All" />
        </li>
        <li>
          <Form.Check type="checkbox" label="Work" />
        </li>
        <li>
          <Form.Check type="checkbox" label="Goods" />
        </li>
        <li>
          <Form.Check type="checkbox" label="Auction/Tax/Revenue" />
        </li>
        <li>
          <Form.Check type="checkbox" label="Consultancy" />
        </li>
        <li>
          <Form.Check type="checkbox" label="Insurance" />
        </li>
      </ul>
    </>
  );
};

export default FilterCheckBox;
