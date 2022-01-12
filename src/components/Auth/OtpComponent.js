import { Field } from 'formik';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from '../common/Form/useForm';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { otpVerify } from './redux/Auth.actions';

const OtpComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let guest = JSON.parse(user);
  console.log(guest?.email);
  let initialValues = {
    otp: '',
    email: guest?.email,
  };

  const validationSchema = yup.object({
    otp: yup.string().required().label('otp'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'From values in login components');
    dispatch(otpVerify(values));
    setSubmitting(false);
  };

  const { CustomInput, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <CustomForm>
      <Container>
        <div className="m-5 p-3">
          <Field
            placeholder="OTP Code eg 1234..."
            name="otp"
            component={CustomInput}
          />

          <Button type="submit" className="w-100">
            Submit
          </Button>
        </div>
      </Container>
    </CustomForm>
  );
};

export default OtpComponent;
