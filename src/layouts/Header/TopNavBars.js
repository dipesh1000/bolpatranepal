import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../redux/Modal/Modal.action';

const TopNavBars = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Top_Nav_bars">
        <Container>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/ourservices">Services</Link>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Covid 19 Tender</a>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <a href="">Contact Us +977 9808776376</a>
            </li>
            <li>
              <Button
                className="custom_bav_btn"
                onClick={() => dispatch(openModal('login'))}
              >
                Login
              </Button>
            </li>
            <li>
              <a href="">Sign up</a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default TopNavBars;
