import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importing external CSS

export default function Home() {
  const navigate = useNavigate();

  const onOpenNotebook = () => {
    navigate('/note');
  };

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Your Personal Notebook</h1>
        <p className="home-description">
          Capture your thoughts, organize your ideas, and unleash your creativity
          with a beautifully designed and intuitive digital notebook.
        </p>
        <button
          onClick={onOpenNotebook}
          className="home-button"
          onMouseEnter={(e) => {
            e.currentTarget.classList.add('hovered');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('hovered');
          }}
        >
          Open Notebook
          
        </button>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    </div>
  );
}
