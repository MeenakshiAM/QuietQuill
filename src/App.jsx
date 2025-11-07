import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Diary from './Pages/Note';

import Login from './Pages/login';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
