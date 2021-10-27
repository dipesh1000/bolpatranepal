import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import LoginImg from '../../images/login.png';
import logo from '../../images/logo.png';
import { openModal } from '../../redux/Modal/Modal.action';
import { RegisterForm } from './RegisterForm';
import RegisterFromTest from './RegisterFromTest';

const RegisterComponent = () => {
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
                <h4>create an account</h4>
                <span>
                  Bolpatra Nepal is a Platform for All Procurement Activities.
                </span>
              </div>
              <RegisterFromTest />
              {/* <Form autoComplete="off">
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Create New Password"
                  />
                  <Form.Text className="text-muted">
                    Must be 8 character long
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Create New Password"
                  />
                  <Form.Text className="text-muted">
                    Both Password must match
                  </Form.Text>
                </Form.Group>
                <div className="btn_container">
                  <Button variant="primary" type="button" size="lg" block>
                    Next
                  </Button>
                </div>
              </Form> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterComponent;
