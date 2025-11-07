import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  // For displaying errors
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle login button click
  const handleLogin = async () => {
    setError(''); // reset error
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Try reading response safely
      let data;
      try {
        data = await response.json();
      } catch (err) {
        // If backend returns plain text (like "Something went wrong")
        const text = await response.text();
        throw new Error(text || 'Invalid server response');
      }

      // If backend returned error (status 4xx/5xx)
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // If backend returns token, store it
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      alert('Login successful 🎉');
      navigate('/note'); // Redirect to notes page
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <section className="Login-Section">
      <div className="login">
        <h1>Login</h1>

        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
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

        {/* Error message display */}
        {error && <p className="error-msg">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: '1rem' }}>
          Don’t have an account?{' '}
          <span
            className="auth-link"
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </section>
  );
}
