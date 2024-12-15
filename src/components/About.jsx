import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-start text-3xl font-mono font-bold text-start p-8 rounded-lg border border-cyan-400 shadow-lg max-w-3xl mx-auto mt-10 transition-transform transform hover:scale-105 animate-fadeIn" id='about'>
      <h2 className="text-4xl mb-4 text-white" data-aos="fade-up">About Me 👋</h2>
      <div className="text-black-300" data-aos="fade-up">
        <p className="font-semibold text-base py-2">
          <span className="text-sky-400">Hi, I’m Mohd Suhail—</span> a MERN Stack Developer with a passion for transforming bold ideas into sleek, high-performance web applications. Whether it’s creating seamless user experiences or crafting clean, efficient code, I bring creativity and precision to every project I tackle. 🚀
        </p>
        <p className="font-semibold text-base py-2" data-aos="fade-up" data-aos-delay="100">
          Armed with skills in <span className="text-sky-400">HTML, CSS, JavaScript, React, and TypeScript</span>, I create responsive user experiences that don’t just look good—they feel good. ✨
        </p>
        <p className="font-semibold text-base py-2" data-aos="fade-up" data-aos-delay="200">
          Before diving into the world of web development, I honed my analytical skills at <span className="text-sky-400">Accenture</span>, where I developed a keen focus on quality and efficiency. Now, I blend that precision with a passion for clean code and creative design, bringing every project to life with a balance of logic and artistry. 🎨
        </p>
        <p className="font-semibold text-base py-2" data-aos="fade-up" data-aos-delay="300">
          With a solid background in business analysis and a love for tackling complex challenges, I approach development with both a strategic mindset and a creative flair. I'm always eager to embrace the next challenge—whether it's building innovative digital solutions or refining user interactions that leave a lasting impact. 💡
        </p>
        <p className="font-semibold text-base py-2" data-aos="fade-up" data-aos-delay="400">
          Let’s collaborate and create something extraordinary together! 🌟
        </p>
      </div>
    </div>
  );
}

export default About;
