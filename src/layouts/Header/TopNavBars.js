import React from 'react';
import { Container } from 'react-bootstrap';

const TopNavBars = () => {
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
              <a href="">Login</a>
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
