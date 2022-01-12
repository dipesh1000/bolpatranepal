import { Field } from 'formik';
import React from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from '../../common/Form/useForm';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from './redux/Profile.actions';
import './styles/UserAboutBox.scss';

const EditProfile = ({ data, isLoading, setShowEditForm }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: data?.name || '',
    phone_no: data?.phone_no || '',
    email: data?.email || '',
    status: data?.status || '',
    country: data?.country || '',
    province: data?.province || '',
    city: data?.city || '',
  };
  const validationSchema = yup.object({
    name: yup.string().required().label('name'),
    phone_no: yup.string().required().label('phone'),
    email: yup.string().required().label('email'),
    status: yup.string().required().label('status'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'from values searching field');
    dispatch(updateProfile(values));
    setShowEditForm(false);
    setSubmitting(false);
  };

  const { CustomInput, CustomSelect, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  const optionData = ['active', 'inactive'];

  return (
    <div className="user_profile_edit">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <CustomForm>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Name
            </Form.Label>
            <Col sm="7">
              <Field name="name" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Phone Number
            </Form.Label>
            <Col sm="7">
              <Field name="phone_no" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Email
            </Form.Label>
            <Col sm="7">
              <Field name="email" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              City
            </Form.Label>
            <Col sm="7">
              <Field name="city" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Province
            </Form.Label>
            <Col sm="7">
              <Field name="province" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Country
            </Form.Label>
            <Col sm="7">
              <Field name="country" component={CustomInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0" controlId="formPlaintextName">
            <Form.Label column sm="5">
              Status
            </Form.Label>
            <Col sm="7">
              <Field
                name="status"
                data={optionData}
                className="custom-select"
              ></Field>
            </Col>
          </Form.Group>
          <div className="mt-2 save_changes_btn">
            <Button variant="outline-primary" type="submit">
              Save Changes
            </Button>
          </div>
        </CustomForm>
      )}
    </div>
  );
};

export default EditProfile;
