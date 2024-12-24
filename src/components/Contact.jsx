import React from 'react';
import { SocialIcon } from 'react-social-icons';

function ContactMe() {
  return (
    <div className="text-white py-12 px-6" id='contact'>
      <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
      
      <p className="text-center mb-6 text-lg">
        Let’s connect! If you’re looking for a developer, have any questions, or know of any opportunities, I’d love to hear from you.
      </p>

      <div className="text-center mb-8">
        <a href="mailto:ms5505535@gmail.com?subject=Hello" className="flex items-center justify-center space-x-2 text-xl font-semibold">
          <img 
              src="https://static.vecteezy.com/system/resources/previews/022/484/516/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
              alt="Email"
              className="w-6 h-6"
          />
          <span>ms5505535@gmail.com</span>
        </a>
      </div>
      
      <p className="text-center mb-6 text-lg">You may also find me on these platforms!</p>
      
      <div className="flex justify-center space-x-6 mb-6">
        <SocialIcon url="https://github.com/Suhail786553" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
        <SocialIcon url="https://www.linkedin.com/in/mohd-suhail-1bb6b8251/" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
      </div>
    </div>
  );
}

export default ContactMe;
