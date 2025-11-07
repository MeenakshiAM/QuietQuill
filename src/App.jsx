// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './Pages/Home';
import Note from './Pages/Note';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
