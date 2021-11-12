import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactusImg from '../../images/contactus.png';
import logo from '../../images/logo.png';
import './Style/style.scss';
import companydata from '../../FakeData/companyInfo.js';
import companyInfo from '../../FakeData/companyInfo.js';
import locationLogo from '../../images/location.png';
import emailLogo from '../../images/email.png';
import contactLogo from '../../images/phone.png';
import {useForm} from '../common/Form/useForm';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';



const ContactUs = () => {

  
  

    return (
        <div className="contact_box">
          <Row>
            <Col md={6} className="pl-0 pr-0">
                <div className="contact_img_holder">
              <div
                className="contact_aside_img"
                style={{ backgroundImage: `url(${contactusImg})` }}
              >
                <div className="contact_info">
                  <div className="contact_info_box">
                    <h2>Stay In Touch With Us!</h2>
                    <div className="contact_bottom_text">
                      <span>
                        Bolpatra Nepal is a Platform for All Procurement
                        Activities.
                      </span>
                    </div>
                    <div className="company_info">
                        <div className="company_info_box">
                            <div className="company_info_icon">
                                <img src={locationLogo} alt="" />
                            </div>
                            <div className="company_info_description">  
                                <h4>Location</h4>
                                <p>{companydata.location}</p>
                            </div>
                        </div>

                        <div className="company_info_box">
                            <div className="company_info_icon">  
                                <img src={emailLogo} alt="" />
                            </div>
                            <div className="company_info_description"> 
                                <h4>Email</h4>
                                <p>{companydata.email}</p>
                            </div>
                        </div>

                        <div className="company_info_box">
                            <div className="company_info_icon">
                                <img src={contactLogo} alt="img" />
                            </div>  
                            <div className="company_info_description"> 
                            <h4>Contact</h4>
                            <div className="contact_wrapper">
                            {companyInfo.contact.map (data =>(
                            <p>{data}</p>
                            ))}
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </Col>
            <Col md={6}>
              <div className="contact_aside_field_box">
                <div className="contact_main_title">
                  <h4>Contact Us</h4>

                  <Formik
                  initialValues = {{
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                  }}>
                  {formik => (
                    console.log(formik)
                  )}
                  </Formik>
                </div>
              </div>
            </Col>
          </Row>
      </div>
    )
}

export default ContactUs
