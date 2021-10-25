import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';

const NavBars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar_wrap">
      <Container>
        <Navbar.Brand href="#home" className="brand_name">
          <img src={logo} />
          Bolpatra Nepal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing">National Traders</Nav.Link>
            <Nav.Link href="#features">Internation Traders</Nav.Link>
            <Nav.Link href="#pricing">Result</Nav.Link>
            <Nav.Link href="#features">Addendum</Nav.Link>
            <Nav.Link href="#pricing">Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
