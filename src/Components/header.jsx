import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

export default function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>My Diary</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/diary">Notebook</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
