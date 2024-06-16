// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import Project from './components/Projects/Project'; 
import AboutMe from './components/AboutMe/About'; 
import Contact from './components/Contact/ContactUs'; 
import './App.css'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'; 
import { darkTheme } from './utils/Theme';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width:100%; 
  height:100%; 
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  console.log(location.pathname);
  return (
      <ThemeProvider theme={darkTheme} >
        <Navbar />
        <Body>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="about" element={<AboutMe />} />
              <Route path="/project" element={<Project />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Wrapper>
        </Body>
      </ThemeProvider>
  );
}

export default App;
