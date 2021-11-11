import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../common/Form/useForm';
import DatePicker from './DatePicker';
import FilterCheckBox from './FilterCheckBox';
import * as yup from 'yup';

const FilterAside = () => {
  let initialValues = {
    date_from: '',
    date_to: '',
  };

  const validationSchema = yup.object({
    date_from: yup.date().required().label('From'),
    date_to: yup.date().required().label('To'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'From values in aside filters components');
    setSubmitting(false);
  };

  const { CustomDateInput, CustomCheckbox, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="AsideBox">
      <div className="filter_aside_box">
        <div className="filter_title">
          <p>Filter</p>
        </div>
        <div className="divider"></div>
        <CustomForm>
          <div className="filter_input_area">
            <DatePicker CustomDateInput={CustomDateInput} />
          </div>
          <div className="divider"></div>
          <FilterCheckBox title="Procruments" />
          <div className="divider"></div>
          <FilterCheckBox title="Projects" />
          <div className="divider"></div>
          <FilterCheckBox title="Tendor Price" />
          <Button type="submit" className="apply_filter">
            Apply Filter
          </Button>
        </CustomForm>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default FilterAside;
