import React, { useState } from 'react';

const Login = ({ onLogin, switchPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Welcome Back!</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.switchText}>
        Don't have an account?{' '}
        <button onClick={switchPage} style={styles.switchButton}>Sign Up</button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    background: 'linear-gradient(135deg, #00c6ff, #66d9ff, #b3ecff, #66d9ff, #00c6ff)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '24px',
  },
  form: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
  },
  switchText: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#333',
  },
  switchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;
