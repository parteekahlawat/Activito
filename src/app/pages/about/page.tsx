"use client";

import React, { useState } from 'react';
import './styles.css';
import Developers from './card';
import Navbar from '@/app/(comps)/header/page';
import Footer from '@/app/(comps)/footer';

const About = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle('dark-mode', !darkMode);
//   };

  return (
    <>
    <Navbar/>
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our application! We are dedicated to providing the best user experience.
        Our team is passionate about technology and design, and we strive to create products
        that are both functional and beautiful.
      </p>
      {/* <button className="toggle-dark-mode" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button> */}
      <Developers/>
    </div>
    <Footer/>
    </>
    
  );
};

export default About;
