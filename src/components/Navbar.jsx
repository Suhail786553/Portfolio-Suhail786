import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const closeMenu = () => setShowLinks(false);

  return (
    <div className="fixed z-[999] backdrop-blur-lg w-full px-6 md:px-20 py-4 flex items-center justify-between">
  
      <div className='logo'>
        <a href="#home">
          <img src="https://seeklogo.com/images/M/ms-industrial-logo-7E95C0D1D4-seeklogo.com.png" alt="Logo" width={80} height={80} />
        </a>
      </div>

      <div className="flex items-center w-full md:justify-center">

      
        <div className='md:hidden ml-auto' onClick={() => setShowLinks(!showLinks)}>
          <GiHamburgerMenu className="w-6 h-6 text-white cursor-pointer hover:text-yellow-400" />
        </div>

      
        <ul className={`md:flex md:flex-row md:items-center md:gap-10 fixed md:static left-0 w-full transition-all duration-300 ease-in-out ${showLinks ? 'top-16 opacity-100 bg-cyan-400' : 'top-[-300px] opacity-0'} md:opacity-100 md:top-0 justify-center`}>
          <li className="text-md capitalize font-semibold font-mono my-2 md:my-0 text-center">
            <a href="#home" onClick={closeMenu} className="text-white hover:text-gray-700 block p-4">Home</a>
          </li>
          <li className="text-md capitalize font-semibold font-mono my-2 md:my-0 text-center">
            <a href="#about" onClick={closeMenu} className="text-white hover:text-gray-700 block p-4">About</a>
          </li>
          <li className="text-md capitalize font-semibold font-mono my-2 md:my-0 text-center">
            <a href="#work" onClick={closeMenu} className="text-white hover:text-gray-700 block p-4">Work</a>
          </li>
          <li className="text-md capitalize font-semibold font-mono my-2 md:my-0 text-center">
            <a href="#contact" onClick={closeMenu} className="text-white hover:text-gray-700 block p-4">Contact</a>
          </li>
        </ul>

      
        <a
          href="https://drive.google.com/file/d/1K9ND5PL_hq3nzed_wuDOU-qkxwaRjgMu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-black px-4 py-2 rounded-lg font-mono transition duration-200 ml-4 md:ml-0 whitespace-nowrap"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
