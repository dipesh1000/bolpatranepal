import { Field } from 'formik';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import LoginImg from '../../images/login.png';
import logo from '../../images/logo.png';
import { openModal } from '../../redux/Modal/Modal.action';
import { useForm } from '../common/Form/useForm';
import * as yup from 'yup';
import './styles/style.scss';
import { login } from './redux/Auth.actions';

const LoginComponent = () => {
  const dispatch = useDispatch();

  let initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'From values in login components');
    dispatch(login(values));
    setSubmitting(false);
  };

  const { CustomInput, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(initialValues, '>>>>>>>>>>>');
  return (
    <div className="login_box">
      <Container>
        <Row>
          <Col md={6} className="pl-0 pr-0">
            <div
              className="login_aside_img"
              style={{ backgroundImage: `url(${LoginImg})` }}
            >
              <div className="login_info">
                <div className="login_info_box">
                  <div className="logo_container">
                    <img src={logo} height="60px" />
                    <span>Bolpatra Nepal</span>
                  </div>
                  <h2>Welcome!</h2>
                  <div className="bottom_text">
                    <span>
                      Bolpatra Nepal is a Platform for All Procurement
                      Activities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="aside_field_box">
              <div className="main_title">
                <h4>Login</h4>
                <span>
                  Bolpatra Nepal is a Platform for All Procurement Activities.
                </span>
              </div>
              <CustomForm>
                <Field name="email" type="text" component={CustomInput} />

                <Field
                  name="password"
                  type="password"
                  component={CustomInput}
                />
                <div className="btn_container">
                  <Button variant="primary" type="submit" size="lg" block>
                    Submit
                  </Button>
                </div>
              </CustomForm>
              <div className="not_member">
                Not a member yet ?{' '}
                <Button onClick={() => dispatch(openModal('register'))}>
                  Signup
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
