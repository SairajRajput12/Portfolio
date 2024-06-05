// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import Project from './components/Projects/Project'; 
import AboutMe from './components/AboutMe/About'; 
import Contact from './components/Contact/ContactUs'; 

function App() {
  console.log(location.pathname);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="about" element={<AboutMe />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
