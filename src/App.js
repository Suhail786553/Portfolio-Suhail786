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
    <div className="bg-zinc-950 w-full min-h-screen text-white flex flex-col items-center">
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
