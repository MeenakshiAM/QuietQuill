import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import child from '../assets/child.png';


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

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "📘 What is QuietQuill?",
      answer: "QuietQuill is a personal digital notebook to capture thoughts, journal entries, and creative ideas securely."
    },
    {
      question: "🔒 Is my data safe?",
      answer: "Yes! All entries are linked to your user account. Security features like login, validation, and (soon) JWT are used to protect your notes."
    },
    {
      question: "📝 Can I format my text?",
      answer: "Absolutely. Use bold, italics, underline, and custom fonts from the toolbar to customize your note style."
    }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section>
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
          <div className='child-img'>
            <img src={child} alt="child" />
          </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
    <div className="faq">
      <h2 className="faq-title">❓ Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
