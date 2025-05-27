import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  
  return (
    <>
     <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="container mt-5">
        <section id="about"><AboutMe /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><SkillSet /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="resume"><Resume /></section>
        <p>© 2025 Surya Sai Maheswar Budidi. All rights reserved.</p>
      </div>
      <footer>
        
      </footer>
    </div>
    </>
  );
}

export default App;
