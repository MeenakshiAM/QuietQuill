import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Signup failed');
      }

      alert('Signup successful ');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2> Sign Up</h2>

      <div className="auth-inputs">
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {error && <p className="error-msg">{error}</p>}

      <button className="auth-btn" onClick={handleSignup}>
        Sign Up
      </button>

      <p>
        Already have an account?{' '}
        <span className="auth-link" onClick={() => navigate('/login')}>
          Login
        </span>
      </p>
    </div>
  );
}
