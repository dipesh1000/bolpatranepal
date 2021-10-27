import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';

export const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', confirmpassword: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" className="form-control" />
            <Field
              type="password"
              name="confirmpassword"
              placeholder="confirm password"
              className="form-control"
            />
            <Field
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="form-control"
            />
            <Field
              type="text"
              name="phone"
              placeholder="phone"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
