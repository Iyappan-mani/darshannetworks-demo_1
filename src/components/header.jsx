

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({
  scrollToFooter,
  scrollTowork,
  scrollToClients

}) => {

  return (
    <Navbar expand="lg" className="overallConatiner bg-white font-weight-bold navbar-custom sticky-top" style={{paddingTop:'10px',paddingBottom:'10px' , }}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={require('../Image/logo.png')} alt="Brand Logo" width="45px" height="auto" />
          <Navbar.Brand className="m-lg-2 text-uppercase" href="#">Darshan indian wedding vendors</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={scrollTowork} href="#work" className="nav-link-hover  me-4">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link-hover  me-4">Services</Nav.Link>
            <Nav.Link onClick={scrollToClients} href="#clients" className="nav-link-hover  me-4">Projects
            </Nav.Link>
            <Nav.Link onClick={scrollToFooter} href="#about" className="nav-link-hover  me-4">About</Nav.Link>
            <Button onClick={scrollToFooter} className="btn-small d-flex align-items-center ">
              Contact <FaArrowRight className="arrow-icon " />
            </Button>

            {/* <Nav.Link href={`https://www.instagram.com`} className="nav-link-hover fw-bold me-4"><FaInstagram /></Nav.Link>
            <Nav.Link href={`https://wa.me/${'+601127975729'}?text=${encodeURIComponent('Hi')}`} className="nav-link-hover fw-bold me-4"><FaWhatsapp /></Nav.Link>
            <Nav.Link   href={`https://www.facebook.com`}  className="nav-link-hover fw-bold me-4"><FaFacebook /></Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
// href={`https://www.instagram.com/${''}`}
//  href={`https://www.facebook.com/${''}`}
