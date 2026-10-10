import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-charbon text-creme font-sans selection:bg-or selection:text-charbon">
      {/* Texture de grain analogique cinématographique (4% opacité) */}
      <div className="film-grain" aria-hidden="true" />

      {/* Barre de navigation flottante */}
      <Navbar />

      {/* Contenu principal */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Project />
        <Contact />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}
