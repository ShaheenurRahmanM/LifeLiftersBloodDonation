import React from "react";

const Search = () => {


    const handleSearch = (event) => {
        const form=event.target;
        alert("No donors found matching the criteria.");
        form.reset();
    }
        
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
      const inputStyle = {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        marginBottom: '15px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
      };
    return(
        <section style={formContainerStyle}>
            <form style={formStyle} onSubmit={handleSearch}> 
                <h2 style={headingStyle}>Search Donors</h2>
                <label style={labelStyle}>Blood Type 
                    <select style={inputStyle}>
                        <option>Select Blood Type</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>
                </label>
                <label style={labelStyle}>Location <input type="text" placeholder="Enter Location" style={inputStyle}></input></label>
                <button type="submit" style={buttonStyle}>Search Donors</button>
            </form>
        </section>
    )
}

export default Search