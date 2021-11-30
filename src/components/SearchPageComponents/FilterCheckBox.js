import { Field, useFormik } from 'formik';
import React from 'react';
import {
  procrumentParams,
  tendorParams,
} from '../../FakeData/SearchParameters';

const FilterCheckBox = ({ title, CustomCheckbox, name }) => {
  // useFormik;
  return (
    <>
      <ul className="filter_checkbox_group">
        <li className="filter_title">{title}</li>
        {name === 'procrument' && procrumentParams.length > 0
          ? procrumentParams.map((item, index) => (
              <li key={index}>
                <Field
                  component={CustomCheckbox}
                  name="procrument"
                  label={item.name}
                  type="checkbox"
                  value={item.value}
                />
              </li>
            ))
          : name === 'projects' && procrumentParams.length > 0
          ? procrumentParams.map((item, index) => (
              <li>
                <Field
                  component={CustomCheckbox}
                  name="project"
                  label={item.name}
                  type="checkbox"
                  value={item.value}
                />
              </li>
            ))
          : name === 'tendor_price' && tendorParams.length > 0
          ? tendorParams.map((item, index) => (
              <li>
                <Field
                  component={CustomCheckbox}
                  name="tendor"
                  label={item.name}
                  type="checkbox"
                  value={item.value}
                />
              </li>
            ))
          : ''}
      </ul>
    </>
  );
};

export default FilterCheckBox;
