import { Field } from 'formik';
import React from 'react';

import { Form } from 'react-bootstrap';

const FilterCheckBox = ({ title, CustomCheckbox }) => {
  return (
    <>
      <ul className="filter_checkbox_group">
        <li className="filter_title">{title}</li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="All"
            type="checkbox"
            value="all"
          />
        </li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="Work"
            type="checkbox"
            value="work"
          />
        </li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="Goods"
            type="checkbox"
            value="goods"
          />
        </li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="Auction/Tax/Revenue"
            type="checkbox"
            value="auction_tax_revenue"
          />
        </li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="Consultancy"
            type="checkbox"
            value="consultancy"
          />
        </li>
        <li>
          <Field
            component={CustomCheckbox}
            name="procrument"
            label="Insurance"
            type="checkbox"
            value="insurance"
          />
        </li>
      </ul>
    </>
  );
};

export default FilterCheckBox;
