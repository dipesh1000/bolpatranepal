import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LoginImg from '../../images/login.png';
import logo from '../../images/logo.png';
import './styles/style.scss';

const LoginComponent = () => {
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
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text className="text-muted text-right">
                    Forgot Password ?
                  </Form.Text>
                </Form.Group>
                <div className="btn_container">
                  <Button variant="primary" type="submit" size="lg" block>
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="not_member">Not a member yet ? Sign Up</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
