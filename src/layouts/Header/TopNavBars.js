import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/Modal/Modal.action';

const TopNavBars = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Top_Nav_bars">
        <Container>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Covid 19 Tender</a>
            </li>
            <li>
              <a href="">Pricing</a>
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
