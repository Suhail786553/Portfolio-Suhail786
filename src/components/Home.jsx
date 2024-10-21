import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ReactTyped as Typed } from 'react-typed';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100); 
  }, []);

  return (
    <div className={`flex items-center justify-start min-h-screen text-white text-left p-8 transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`} id="home">
      <div className="hero-section flex flex-col items-start max-w-3xl">
        
      
        <div className={`flex items-center gap-2 mb-6 transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex h-6 w-6 items-center justify-center relative">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-700"></span>
          </div>
          <span className="text-lg font-semibold font-poppins text-indigo-600">OPEN TO WORK</span>
        </div>

        
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-roboto mb-4 transform transition-all duration-1000 ease-in-out ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          Hi, I am{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Ashwini Maurya.
          </span>
          <br />
          I am a{' '}
          <span className='italic font-semibold text-purple-500'>
            <Typed
              strings={['Frontend Developer', 'Web Developer']}
              typeSpeed={40} 
              backSpeed={50} 
              loop 
            />
          </span>
        </h1>

      
        <p className={`font-medium font-poppins text-lg sm:text-xl lg:text-2xl mb-8 max-w-md text-gray-500 transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          Passionate Frontend Developer dedicated to building efficient, innovative, and user-centric web solutions. 
          Let’s collaborate and bring your vision to reality.
        </p>

        
        <div className={`flex space-x-6 mt-4 justify-start transition-all duration-1000 ease-in-out ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <SocialIcon
            url="https://github.com/Ash1799Maurya"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 40, width: 40 }}
            className="transition-transform transform hover:scale-125 duration-300 ease-in-out"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ashwinimaurya1999"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 40, width: 40 }}
            className="transition-transform transform hover:scale-125 duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
