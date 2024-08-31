import React from 'react';
import './Navbar.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Navbar_brand from './Navbar_brand.png';

function AppNavbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/"><img src={Navbar_brand}  className="navbar-logo" alt="Blood Donation App Logo" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#register-donor" onClick={() => scrollToSection('donor-form-section')}>Register Donor</Nav.Link>
            <Nav.Link href="#register-recipient" onClick={() => scrollToSection('recipient-form-section')}>Register Recipient</Nav.Link>
            <Nav.Link href="#search-donors" onClick={() => scrollToSection('search-donors-section')}>Search Donors</Nav.Link>
            {/* <Nav.Link href="/notifications">Notifications</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
