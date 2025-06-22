import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔁 Check login state from localStorage on load
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // 🔓 Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Your Personal Notebook</h1>
        <p className="home-description">
          Capture your thoughts, organize your ideas, and unleash your creativity
          with a beautifully designed and intuitive digital notebook.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <button
            className="home-button"
            onClick={() => isLoggedIn ? navigate('/note') : navigate('/login')}
          >
            {isLoggedIn ? 'Open Notebook' : 'Login to Access'}
          </button>

          {!isLoggedIn ? (
            <>
              <button
                className="Login-button"
                onClick={() => navigate('/login')}
              >
                Login
              </button>

              <button
                className="signUp-button"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="logout-button"
              onClick={handleLogout}
              style={{ backgroundColor: '#ff6b6b', color: 'white' }}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
