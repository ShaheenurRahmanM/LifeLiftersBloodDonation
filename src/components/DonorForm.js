import React from 'react';
import { Container } from 'react-bootstrap';

const DonorRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get('fullName'),
      dob: formData.get('dob'),
      gender: formData.get('gender'),
      bloodGroup: formData.get('bloodGroup'),
      state: formData.get('state'),
      city: formData.get('city'),
      mobileNo: formData.get('mobileNo'),
      email: formData.get('email'),
      password: formData.get('password'),
      lastDonation: formData.get('lastDonation'),
      termsAccepted: formData.get('termsAccepted') === 'on', 
    };

    if (!data.fullName || !data.dob || !data.gender || !data.bloodGroup || !data.state || !data.city || !data.mobileNo || !data.email || !data.password || !data.lastDonation) {
      alert('Please fill in all fields');
      return;
    }
    alert("Registeration Successfull!");
    console.log('Form Data Submitted:', data);
    form.reset();
  };

  const sectionStyle = {
    minHeight: '100vh', 
    width: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
    overflowY: 'auto',
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

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const checkboxStyle = {
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return(
    <section id="donor-form-section" style={sectionStyle}>
      <Container style={containerStyle}>
        <form onSubmit={handleSubmit}>
          <h2 style={headingStyle}>Donor Registration</h2>
          <label style={labelStyle}> Full Name: <input type="text" name="fullName" style={inputStyle}/></label>
          <label style={labelStyle}> Date of Birth: <input  type="date"  name="dob"  style={inputStyle}/></label>
          <label style={labelStyle}>Gender:
            <div>
              <input type="radio" name="gender" value="Male" /> Male &nbsp;&nbsp;
              <input type="radio" name="gender" value="Female" /> Female &nbsp;&nbsp;
              <input type="radio" name="gender" value="Other" /> Other &nbsp;&nbsp;
            </div>
          </label>
          <label style={labelStyle}> Blood Group:
            <select name="bloodGroup" style={selectStyle}>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>
          <label style={labelStyle}> State:
            <select name="state" style={selectStyle}>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            </select>
          </label>
          <label style={labelStyle}> City:<input type="text" name="city" style={inputStyle}/></label>
          <label style={labelStyle}> Mobile No: <input type="text" name="mobileNo" style={inputStyle}/></label>
          <label style={labelStyle}>E-mail:<input type="email" name="email" style={inputStyle}/></label>
          <label style={labelStyle}> Password:<input type="password" name="password" style={inputStyle}/></label>
          <label style={labelStyle}>Last Time Blood Donated:
            <select name="lastDonation" style={selectStyle}>
              <option value="Not donated ever">Not donated ever</option>
              <option value="less than 3 months">Less than 3 months</option>
              <option value="More than 3 months">More than 3 months</option>
            </select>
          </label>
          <label style={labelStyle}><input type="checkbox" name="termsAccepted" style={checkboxStyle}/> Accept terms and conditions</label>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </Container>
    </section>
  );
};

export default DonorRegistration;
