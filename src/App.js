import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import Particle from './components/Particle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App; 