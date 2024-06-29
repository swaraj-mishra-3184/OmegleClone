import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

function Authentication() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('authToken'); // Adjust based on your auth logic
    if (isLoggedIn) {
      navigate('/home'); // Redirect to Home component if logged in
    }
  }, [navigate]);

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-500 to-orange-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Omegle</h1>
        <div className="mb-4">
          <button
            onClick={handleLoginClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
