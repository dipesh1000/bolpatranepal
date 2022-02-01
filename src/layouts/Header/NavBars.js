import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTenderList } from '../../components/SearchPageComponents/redux/Search.action';
import SearchSection from '../../components/SearchSection/SearchSection';
import logo from '../../images/ogp.png';

const NavBars = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLandingData = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar_wrap">
      <Container>
        <Navbar.Brand className="brand_name">
          <div onClick={handleLandingData}>
            <img src={process.env.PUBLIC_URL + logo} alt="Brand Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <SearchSection />
          <Nav className="ml-auto">
            <Nav.Link className="active">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">National Tenders</Nav.Link>
            <Nav.Link href="#features">Internation Tenders</Nav.Link>
            <Nav.Link href="#pricing">Result</Nav.Link>
            <Nav.Link href="#features1">Addendum</Nav.Link>
            <Nav.Link href="#pricing1">Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
