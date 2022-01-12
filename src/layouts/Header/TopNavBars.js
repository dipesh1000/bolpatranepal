import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../components/Auth/redux/Auth.actions';
import { openModal } from '../../redux/Modal/Modal.action';

const TopNavBars = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  console.log(auth, 'From Auth Selector top nav bar');

  const handleLogout = () => {
    dispatch(logout(auth?.token));
    history.push('/');
  };
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
            {!auth.isAuthenticated ? (
              <>
                <li>
                  <Button
                    className="custom_bav_btn"
                    onClick={() => dispatch(openModal('login'))}
                  >
                    Login
                  </Button>
                </li>
                <li>
                  <Button
                    className="custom_bav_btn"
                    onClick={() => dispatch(openModal('register'))}
                  >
                    Register
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button className="custom_bav_btn" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
                <li>
                  <Link to="/user/profile">Profile</Link>
                </li>
              </>
            )}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default TopNavBars;
