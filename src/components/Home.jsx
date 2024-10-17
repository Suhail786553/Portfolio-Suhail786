import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { ReactTyped as Typed } from 'react-typed';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black text-center" id='home'>
      <div className='hero-section flex flex-col items-center p-6'>
        <img 
          src="/Ashwini Maurya.png" 
          width={213} 
          height={213}
          className="rounded-full border-4 border-cyan-400 shadow-lg transition-transform duration-300 hover:scale-105"
          alt="Ashwini Maurya" 
        />

        <div className="flex items-center gap-2 mt-4 mb-6">
          <div className="flex h-6 w-6 items-center justify-center relative">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-base font-semibold font-mono">OPEN TO WORK</span>
        </div>

        <h1 className='text-3xl sm:text-4xl font-bold font-mono mb-2'>
          Hi, I am Ashwini Maurya. I am a{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 italic font-sans'>
            <Typed
              strings={['Frontend Developer', 'Web Developer']}
              typeSpeed={40} 
              backSpeed={50} 
              loop 
            />
          </span>
        </h1>

        <p className='font-semibold font-mono text-base sm:text-lg mb-6 max-w-lg'>
          Passionate Frontend Developer crafting engaging, user-friendly web experiences. 
          Let's bring your ideas to life with innovative design and code!
        </p>

        <div className="flex space-x-4 mt-4">
          <SocialIcon url="https://github.com/Ash1799Maurya" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://www.linkedin.com/in/ashwinimaurya1999" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
