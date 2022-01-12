import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import './styles/SearchArea.scss';
import * as yup from 'yup';
import { useForm } from '../common/Form/useForm';
import { Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { getListSearching } from '../SearchPageComponents/redux/Search.action';
import { useDispatch } from 'react-redux';

const SearchSection = () => {
  let initialValues = {
    searching_params: '',
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    searching_params: yup.string().required().label('searching_params'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'from values searching field');
    dispatch(getListSearching(values));
    history.push(`/search/${values.searching_params}`);
    setSubmitting(false);
  };

  const { CustomInput, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="searchArea">
      <CustomForm>
        <Form.Group as={Row} controlId="formSearch" className="mb-0">
          <Col sm={10}>
            <Field
              size="lg"
              type="text"
              name="searching_params"
              placeholder="Search For Procurment"
              component={CustomInput}
            />
          </Col>
          <Col sm={2}>
            <Button type="submit">
              <GoSearch />
            </Button>
          </Col>
        </Form.Group>
      </CustomForm>
    </div>
  );
};

export default SearchSection;
