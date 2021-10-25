import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Footer/styles/Footer.scss';
import CopyRight from './CopyRight';
import { MdPhone, MdMail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="main_footer_area">
      <Container>
        <Row>
          <Col>
            <div className="Footer_Menu_Box">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">National Tender</a>
                </li>
                <li>
                  <a href="">International Tender</a>
                </li>
                <li>
                  <a href="">Result</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="Footer_Menu_Box">
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="">Website</a>
                </li>
                <li>
                  <a href="">Mail</a>
                </li>
                <li>
                  <a href="">National Tender</a>
                </li>
                <li>
                  <a href="">International Tender</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="Footer_Menu_Box">
              <h5>Quick Links</h5>
              <ul>
                <li className="contact_Item">
                  <IoLocationSharp />
                  Babarmahal, Kathmandu,Nepal
                </li>
                <li className="contact_Item">
                  <MdMail />
                  dipesh.stha@an4soft.com
                </li>
                <li className="contact_Item">
                  <MdPhone />
                  <div>
                    <div>+977 9849447788 +977 9823090145</div>
                    <div>+977 9849447788 +977 9823090145</div>
                  </div>
                </li>
                <li className="social_media">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaTwitter />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="Footer_Menu_Box">
              <h5>Our Valued Users</h5>
              <ul className="valued_users">
                <li>
                  <img src="https://pbs.twimg.com/media/EO36zmsW4AAkjTZ.jpg" />
                </li>
                <li>
                  <img src="https://pbs.twimg.com/media/EO36zmsW4AAkjTZ.jpg" />
                </li>
                <li>
                  <img src="https://pbs.twimg.com/media/EO36zmsW4AAkjTZ.jpg" />
                </li>
                <li>
                  <img src="https://pbs.twimg.com/media/EO36zmsW4AAkjTZ.jpg" />
                </li>
                <li>
                  <img src="https://pbs.twimg.com/media/EO36zmsW4AAkjTZ.jpg" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <CopyRight />
    </div>
  );
};

export default Footer;
