import React from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer"

const App = () => {
  
  return (
    <>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
    </>
  );
};

export default App;

