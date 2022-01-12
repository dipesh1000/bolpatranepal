import { Field, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import {
  procrumentParams,
  tendorParams,
} from '../../FakeData/SearchParameters';

const FilterCheckBox = ({
  handleChange,
  title,
  procrument,
  loading,
  procrumentBudget,
  procrumentProjectType,
  name,
}) => {
  const [show, setShow] = useState(false);

  const procrumentParamsList = (name, data) => {
    console.log(name, data, 'line no 19');
    return loading ? (
      <Spinner animation="border" variant="secondary" />
    ) : data?.length > 0 ? (
      data &&
      data.map((item, index) => (
        <li key={index}>
          <Form.Group controlId={`formBasicCheckbox${name}`}>
            <Form.Check
              name={item && item.title}
              label={item && item.title}
              onChange={(e) => handleChange(e)}
              id={item && item.title}
              type="checkbox"
              checked={(item && item.isChecked) || false}
              value={item && item.id}
            />
          </Form.Group>
        </li>
      ))
    ) : (
      ''
    );
  };

  return (
    <>
      <ul className={`filter_checkbox_group ${show ? 'active' : ''}`}>
        <li className="filter_title">{title}</li>
        {name === 'procurement_category' ? (
          <React.Fragment>
            <Form.Group controlId="formBasicCheckbox1">
              <Form.Check
                type="checkbox"
                onChange={(e) => handleChange(e)}
                label="Select All"
                name="selectAll"
                id="selectAll"
                checked={
                  procrument?.filter((i) => i && i.isChecked !== true).length <
                  1
                }
                value="selectAll"
              />
            </Form.Group>
            {procrumentParamsList(name, procrument)}
            {!show ? (
              <Button onClick={() => setShow(!show)}>
                See All <MdKeyboardArrowDown />
              </Button>
            ) : (
              <Button onClick={() => setShow(!show)}>
                Hide <MdKeyboardArrowUp />
              </Button>
            )}
          </React.Fragment>
        ) : name === 'project_type' ? (
          <React.Fragment>
            <Form.Group controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                onChange={(e) => handleChange(e)}
                label="Select All"
                name="selectAllProjectType"
                id="selectAllProject"
                checked={
                  procrumentProjectType?.filter(
                    (i) => i && i.isChecked !== true
                  ).length < 1
                }
                value="selectAll"
              />
            </Form.Group>
            {procrumentParamsList(name, procrumentProjectType)}
            {!show ? (
              <Button onClick={() => setShow(!show)}>
                See All <MdKeyboardArrowDown />
              </Button>
            ) : (
              <Button onClick={() => setShow(!show)}>
                Hide <MdKeyboardArrowUp />
              </Button>
            )}
          </React.Fragment>
        ) : name === 'budget' ? (
          <React.Fragment>
            <Form.Group controlId="formBasicCheckbox3">
              <Form.Check
                type="checkbox"
                onChange={(e) => handleChange(e)}
                label="Select All"
                name="selectAllBudget"
                id="selectAll1"
                checked={
                  procrumentBudget?.filter((i) => i && i.isChecked !== true)
                    .length < 1
                }
                value="selectAll1"
              />
            </Form.Group>
            {procrumentParamsList(name, procrumentBudget)}
          </React.Fragment>
        ) : (
          ''
        )}
        {/* {loading ? (
          <Spinner animation="border" variant="secondary" />
        ) : name === 'procurement_category' &&
          procrument &&
          procrument.length > 0 ? (
          procrument &&
          procrument.map((item, index) => (
            <li key={index}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  name={item && item.title}
                  label={item && item.title}
                  onChange={(e) => handleChange(e)}
                  id={item && item.id}
                  type="checkbox"
                  checked={(item && item.isChecked) || false}
                  value={item && item.id}
                />
              </Form.Group>
            </li>
          ))
        ) : name === 'budget' && tendorParams.length > 0 ? (
          tendorParams.map((item, index) => (
            <li>
              <Field
                component={CustomCheckbox}
                name="budget"
                label={item.name}
                type="checkbox"
                value={item.value}
              />
            </li>
          ))
        ) : (
          ''
        )} */}
      </ul>
    </>
  );
};

export default FilterCheckBox;
