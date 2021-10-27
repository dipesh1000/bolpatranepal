import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
const RegisterFromTest = () => {
  const [data, setData] = useState({
    full_name: '',
    phone: '',
    email: '',
    password: '',
    confrim_password: '',
    city: '',
    district: '',
    state: '',
    country: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
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
  confrim_password: Yup.string()
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
          <Field
            name="email"
            type="text"
            placeholder="Email"
            className="form-control"
          />

          <ErrorMessage name="email" />
          <Field
            name="password"
            placeholder="Password"
            className="form-control"
          />
          <ErrorMessage name="password" />
          <Field
            name="confrim_password"
            placeholder="Confirm Password"
            className="form-control"
          />
          <ErrorMessage name="confrim_password" />
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
  full_name: Yup.string().required().label('full_label'),
  phone: Yup.string().required().label('phone'),
  city: Yup.string().required().label('city'),
  state: Yup.string().required().label('state'),
  district: Yup.string().required().label('district'),
  country: Yup.string().required().label('country'),
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
          <Field name="full_name" className="form-control" />
          <ErrorMessage name="full_name" />
          <Field name="phone" className="form-control" />
          <ErrorMessage name="phone" />
          <Field name="city" className="form-control" />
          <ErrorMessage name="city" />
          <Field name="district" className="form-control" />
          <ErrorMessage name="district" />
          <Field name="state" className="form-control" />
          <ErrorMessage name="state" />
          <Field name="country" className="form-control" />
          <ErrorMessage name="country" />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterFromTest;
