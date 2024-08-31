import React, { useRef, useState } from 'react';
import { Form, Button, Container, Table } from 'react-bootstrap';

const SearchDonors = () => {
  const bloodTypeRef = useRef(null);
  const locationRef = useRef(null);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const donors = [
    { name: 'Shaheenur Rahman M', bloodType: 'A+', location: 'Coimbatore' },
    { name: 'Saifullah A', bloodType: 'B+', location: 'Mayiladuthurai' },
    { name: 'Sanjael Raja', bloodType: 'B+', location: 'Ariyalur' },
    { name: 'Siva D', bloodType: 'AB-', location: 'Karur' },
    { name: 'Sujan G', bloodType: 'O+', location: 'Coimbatore' },
    { name: 'Seeniselvam B', bloodType: 'A+', location: 'Virudhunagar' },
    { name: 'Saravanakumar M', bloodType: 'B+', location: 'Dharapuram' },
    { name: 'Rohit T J', bloodType: 'A+', location: 'Coimbatore' },
    { name: 'Sheik Irfan Bashaa S A', bloodType: 'A+', location: 'Namakkal' },
    { name: 'Varun', bloodType: 'A+', location: 'Pudukkottai' },
    { name: 'Rajesh', bloodType: 'O-', location: 'Thanjavur' },
    { name: 'Rakesh', bloodType: 'B+', location: 'Thiruvarur' },
    { name: 'Ranjeet', bloodType: 'AB-', location: 'Tiruchirappalli' },
    { name: 'Niranjan P', bloodType: 'O+', location: 'Tirupur' },
    { name: 'Roshan', bloodType: 'A+', location: 'Coimabatore' },
    { name: 'Siva Perumal', bloodType: 'O-', location: 'Chidambaram' },
    { name: 'Mugilan', bloodType: 'B+', location: 'Dharmapuri' },
    { name: 'Tharun', bloodType: 'AB-', location: 'Erode' },
    { name: 'Sriganth', bloodType: 'A+', location: 'Dindigul' },
    { name: 'Surjith', bloodType: 'A+', location: 'Kanyakumari' },
    { name: 'Pugal', bloodType: 'O-', location: 'Thiruchirappalli' },
    { name: 'Rishi', bloodType: 'A+', location: 'Thirunelveli' },
    { name: 'Nagaraj', bloodType: 'O-', location: 'Thirunelveli' },
    { name: 'Rhenison', bloodType: 'B+', location: 'Tiruchirapalli' },
    { name: 'Sanjay', bloodType: 'AB-', location: 'Krishnagiri' },
    { name: 'Sakthi', bloodType: 'A+', location: 'Salem' },
    { name: 'Nithish', bloodType: 'A+', location: 'Tirupur' },
    { name: 'Ratheesh', bloodType: 'B+', location: 'Kanyakumari' },
    { name: 'Dharshan', bloodType: 'AB-', location: 'Madurai' },
    { name: 'Iniyan', bloodType: 'A+', location: 'Mannarkudi' },
    { name: 'Vishali', bloodType: 'A+', location: 'Thanjavur' },
    { name: 'Priyadharshini', bloodType: 'AB+', location: 'Ramnathapuram' },
    { name: 'Navya', bloodType: 'O-', location: 'Karur' },
    { name: 'Neela Rathnam', bloodType: 'O+', location: 'Nagercoil' },
    { name: 'Nashifa', bloodType: 'B+', location: 'Coimbatore' },
    
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const bloodType = bloodTypeRef.current.value;
    const location = locationRef.current.value.toLowerCase(); 

    const results = donors.filter(
      (donor) =>
        (bloodType === '' || donor.bloodType === bloodType) &&
        (location === '' || donor.location.toLowerCase().includes(location)) 
    );

    setFilteredDonors(results);
  };

  
  const sectionStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: '#f8f9fa', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'white', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const tableStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  const noResultsStyle = {
    marginTop: '20px',
    textAlign: 'center',
    color: '#999',
  };

  return (
    <section id="search-donors-section" style={sectionStyle}>
      <Container style={containerStyle}>
        <h2 style={headingStyle}>Search Donors</h2>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="formBloodType">
            <Form.Label>Blood Type</Form.Label>
            <Form.Control as="select" ref={bloodTypeRef}>
              <option value="">Select blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              ref={locationRef}
              placeholder="Enter location"
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '10px' }}>
            Search Donors
          </Button>
        </Form>

        {filteredDonors.length > 0 && (
          <Table striped bordered hover style={tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Type</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonors.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.bloodType}</td>
                  <td>{donor.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {filteredDonors.length === 0 && (
          <p style={noResultsStyle}>No donors found matching the criteria.</p>
        )}
      </Container>
    </section>
  );
};

export default SearchDonors;