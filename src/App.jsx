import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/header'
import Home from './Pages/Home';
import Note from './Pages/Note'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </>
  )
}

export default App
