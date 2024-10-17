import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  // Manage the visibility of the links
  const [showLinks, setShowLinks] = useState(false);
  
  const closeMenu = () => setShowLinks(false);

  return (
    <div className="fixed z-[999] backdrop-blur-lg w-full px-20 py-4 flex items-center justify-between">
      <div className='logo'>
        <a href="#home">
          <img src="/Logo.png" alt="Logo" width={80} height={80} />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={`flex-col md:flex md:flex-row md:items-center md:gap-10 absolute md:static transition-all duration-300 ${showLinks ? 'top-16 left-0 w-full z-10 p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg' : 'top-[-200px]'}`}>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#home" onClick={closeMenu} className="text-black hover:text-gray-300">Home</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#about" onClick={closeMenu} className="text-black hover:text-gray-300">About</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#work" onClick={closeMenu} className="text-black hover:text-gray-300">Work</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#contact" onClick={closeMenu} className="text-black hover:text-gray-300">Contact</a>
        </li>
      </ul>

      
      <div className='hamburger-menu md:hidden mr-5' onClick={() => setShowLinks(!showLinks)}>
        <GiHamburgerMenu className="w-5 h-5 text-black" />
      </div>

      <a
        href="https://drive.google.com/file/d/1cnJi932PM6dYYba7cMrKKItt3QKrnVwT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-black px-4 py-2 rounded-lg font-mono transition duration-200"
        download
      >
        Download Resume
      </a>


     
    </div>
  );
}

export default Navbar;
