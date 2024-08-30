import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgvid from './bgvid.mp4';

const HomePage = () => {
  const containerStyle = {
    position: 'relative',
    zIndex: '1',
    color: '#000',
    textAlign: 'left',
    padding: '50px 20px',
    maxWidth: '600px',
    marginLeft: '0px',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '2.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
  };

  const buttonStyle = {
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '100px',
    margin: '10px',
  };

  const fullscreen = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 0px',
  };

  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={fullscreen}>
      <video style={videoStyle} src={bgvid} autoPlay loop muted />

      <Container style={containerStyle} className="home-container">
        <Row className="justify-content-start text-left"> 
          <Col md={12}>
            <h1 style={headingStyle}>Welcome to Life Lifters</h1>
            <p style={paragraphStyle}>
              Connect with donors and recipients to help save lives. Find donors, register as a donor or recipient, and manage your profile all in one place.
            </p>
            <Button style={buttonStyle} variant="primary" onClick={() => scrollToSection('donor-form-section')}> Register </Button>
            <Button style={buttonStyle} variant="primary" onClick={() => scrollToSection('search-donors-section')}>Find Donors </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomePage;
