import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { register } from './redux/Auth.actions';
import { useDispatch, useSelector } from 'react-redux';
const RegisterFromTest = () => {
  const [data, setData] = useState({
    name: '',
    phone_no: '',
    email: '',
    password: '',
    passwordconfirmation: '',
    status: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
    dispatch(register(formData));
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log('data', data);

  return <div className="App">{steps[currentStep]}</div>;
};

const stepOneValidationSchema = Yup.object({
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
  passwordconfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="mb-3">
            <Field
              name="email"
              type="text"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-3">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <ErrorMessage name="password" />
          </div>
          <Field
            name="passwordconfirmation"
            type="password"
            placeholder="Confirm Password"
            className="form-control"
          />
          <ErrorMessage name="passwordconfirmation" />
          <div className="btn_container">
            <Button variant="primary" type="submit" size="lg" block>
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  name: Yup.string().required().label('name'),
  phone_no: Yup.string().required().label('phone_no'),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="mb-3">
            <Field
              name="name"
              placeholder="full names"
              className="form-control"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="mb-3">
            <Field
              name="phone_no"
              placeholder="phone"
              className="form-control"
            />
            <ErrorMessage name="phone_no" />
          </div>
          <div className="mb-3">
            <Field name="status" className="custom-select" as="select">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Field>
            <ErrorMessage name="status" />
          </div>

          <div className="button_container">
            <Button variant="primary" onClick={() => props.prev(values)}>
              Back
            </Button>
            <Button type="submit" variant="success">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterFromTest;
