import React from 'react';

function Navbar() {
  return (
    <div className="fixed z-[999] backdrop-blur-lg w-full px-20 py-4 flex items-center justify-between">
      <div className='logo'>
        <a href="#home">
          <img src="/Logo.png" alt="Logo" width={80} height={80} />
        </a>
      </div>
      <ul className="flex items-center gap-10">
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#home">Home</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#about">About</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#work">Work</a>
        </li>
        <li className="text-md capitalize font-semibold font-mono">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1cnJi932PM6dYYba7cMrKKItt3QKrnVwT/view?usp=sharing"
        target="_blank"
        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-black px-4 py-2 rounded-lg font-mono transition duration-200"
        download
      >
        Download Resume
      </a>
    </div>
  );
}

export default Navbar;
