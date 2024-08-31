import React from 'react';

const RecipientForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name').trim(),
      bloodGroup: formData.get('bloodGroup').trim(),
      unitsRequired: formData.get('unitsrequired').trim(),
      hospitalName: formData.get('hospitalName').trim(),
      location: formData.get('location').trim(),
      donationDate: formData.get('donationDate').trim(),
    };

    if (!data.name || !data.bloodGroup || !data.unitsRequired || !data.hospitalName || !data.location || !data.donationDate) {
      alert('Please fill in all fields');
      return;
    }

    alert('Recipient request created successfully!');
    console.log('Form Data Submitted:', data);
    form.reset();
  };

  const formContainerStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: '#f8f9fa', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const formStyle = {
    padding: '20px',
    backgroundColor: 'white', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%'
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
    marginTop: '5px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'block', 
    margin: '20px auto' 
  };

  return (
    <section id="recipient-form-section" style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Recipient Registration</h2>
        <label style={labelStyle}>Name: <input type="text" name="name" style={inputStyle} /></label>
        <label style={labelStyle}>Blood Group:
          <select name="bloodGroup" style={inputStyle}>
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
        <label style={labelStyle}>Number of Units required: <input type="number" name="unitsrequired" style={inputStyle} /></label>
        <label style={labelStyle}>Hospital Name:  <input type="text" name="hospitalName" style={inputStyle} /></label>
        <label style={labelStyle}>Location: <input type="text" name="location" style={inputStyle} /></label>
        <label style={labelStyle}>Blood Needed By: <input type="date" name="donationDate" style={inputStyle} /></label>
        <button type="submit" style={buttonStyle}>Request Blood</button>
      </form>
    </section>
  );
};

export default RecipientForm;
