import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const CustomCheckbox = ({
  label,
  field,
  form,
  formik,
  procrumentList,
  value,
  ...props
}) => {
  const [data, setData] = useState([]);
  const [pro, setPro] = useState(procrumentList);
  const [checkValue, setCheckValue] = useState({});

  // const handleOnChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   console.log(name, value, checked);
  //   if (field.value === value && checked === true) {
  //     form.setFieldValue(name, (field.checked = checked));
  //   }
  //   console.log(field.checked, 'From Field');
  // };
  // useEffect(() => {
  //   console.log(field, 'gaghae');
  // }, [field]);
  return (
    <div>
      <Form.Check {...props} {...field} label={label} />
    </div>
  );
};

export default CustomCheckbox;
