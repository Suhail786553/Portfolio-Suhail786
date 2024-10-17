import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ExperienceWith from './components/ExperienceWith';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-500 bg-opacity-75 to-sky-400 w-full min-h-screen text-black flex flex-col items-center">
      <Navbar />
      <Home />
      <ExperienceWith />
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
