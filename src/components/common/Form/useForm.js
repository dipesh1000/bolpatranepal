import React from 'react';
import { Field, Form, Formik, useFormik } from 'formik';
import Input from './CustomInput';

export const useForm = ({ initialValues, onSubmit, validationSchema }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  const CustomInput = (props) => {
    return <Field {...props} component={Input} />;
  };
  const CustomForm = ({ children, onKeyDown, ...others }) => {
    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(errors) => (
          <Form onKeyDown={onKeyDown && onKeyDown} errors={errors}>
            {children}
          </Form>
        )}
      </Formik>
      //  <form
      //    {...others}
      //    className={classes.form}
      //    onSubmit={formik.handleSubmit}
      //    encType="multipart/form-data"
      //  >
      //    {children}
      //  </form>
    );
  };
  return { formik, CustomForm, CustomInput };
};
