import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Login failed');
      }

      const data = await response.json();
      // Example: Save token to localStorage
      localStorage.setItem('token', data.token);

      // Redirect to notes page
      navigate('/note');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="Login-Section">
      <div className="login">
        <h1> Login</h1>

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

        {error && <p className="error-msg">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </section>
  );
}
