import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the stored auth token from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedAuthToken = `${storedUsername}:${storedPassword}`;

    // Create the auth token using the inputted username and password
    const authToken = `${username}:${password}`;

    // Check if the generated auth token matches the stored auth token
    if (authToken === storedAuthToken) {
      // Store the auth token in local storage (optional, depending on your logic)
      localStorage.setItem('authToken', authToken);
      navigate('/home');
    } else {
      // Handle login failure (e.g., show an error message)
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form className="w-1/2 mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
