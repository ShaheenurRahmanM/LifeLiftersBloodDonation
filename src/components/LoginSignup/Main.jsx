import React, { useState } from 'react';
import Login from './Login';
import Signup from './Sign';
import HomePage from '../Homepage';
import AppNavbar from '../Navbar';
import DonorRegistration from '../DonorForm';
import RecipientForm from '../RecipientForm';
import SearchDonors from '../SearchDonors';



const Main = () => {
  const [currentPage, setCurrentPage] = useState('login'); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return(
        <>
            <AppNavbar />
            <HomePage />
            <DonorRegistration />
            <RecipientForm />
            <SearchDonors />
        </>
        
    ) 
  }

  return (
    <div>
      {currentPage === 'login' ? (
        <Login onLogin={handleLogin} switchPage={() => setCurrentPage('signup')} />
      ) : (
        <Signup onSignup={handleSignup} switchPage={() => setCurrentPage('login')} />
      )}
    </div>
  );
};

export default Main;
