import React, { useState } from 'react';
import apiService from './apiService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../css/LoginForm.css'; // Import your CSS file for styling

function LoginForm() {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to authenticate the user
      const response = await apiService.post('/login', formData);
      if (response.status === 200) {
        // Redirect to the home page after successful login
        navigate('/');
      } else {
        // Handle authentication failure (display error message, etc.)
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      // Handle network or server errors
      setError('An error occurred. Please try again later.');
    }
  };
  return (
    <div className="login-container">
      <div className="image-container">
        {/* Your image goes here */}
      </div>
      <div className="login-form">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required // Mark the field as required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required // Mark the field as required
            />
          </div>
          <button type="submit">Login</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
