//import logo from './logo.svg';
//import './App.css';
//import SearchDonors from './components/SearchDonors';

import AppNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import DonorRegistration from './components/DonorForm';
import RecipientForm from './components/RecipientForm';
import Search from './components/DonorSearch';
function App() {
  return (
    <div>
      <AppNavbar />
      <HomePage />
      <DonorRegistration />
      <RecipientForm />
      <Search />
      <h1>Life Lifters - Blood Donation Application</h1>
      
      </div>
  );
}

export default App;
