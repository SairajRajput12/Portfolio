// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import Project from './components/Project'; 
import About from './components/About'; 
import Contact from './components/ContactUs'; 

function App() {
  console.log(location.pathname);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
