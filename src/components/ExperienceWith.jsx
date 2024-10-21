import React from 'react';

function ExperienceWith() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 mt-10 mb-6 text-base font-bold font-mono p-4">
      <span className='text-4xl text-white font-extrabold'>EXPERIENCE WITH</span>
      <div className='Skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 mt-6'>
        {[
          { name: "HTML", img: "/logo/html-1.svg" },
          { name: "CSS", img: "/logo/css-3.svg" },
          { name: "JavaScript", img: "/logo/icon-javascript.svg" },
          { name: "TypeScript", img: "/logo/icon-typescript.svg" },
          { name: "React", img: "/logo/icon-react (2).svg" },
          { name: "Tailwind CSS", img: "/logo/icon-tailwindcss.svg" },
          { name: "MySQL", img: "/logo/mysql-logo-svgrepo-com.svg" },
          { name: "Git", img: "/logo/icon-git.svg" },
          { name: "WordPress", img: "/logo/wordpress-icon-1.svg" },
          { name: "Figma", img: "/logo/icon-figma.svg" },
        ].map((skill, index) => (
          <div key={index} className="skill-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <img src={skill.img} alt={skill.name} className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28" /> 
            <span className="mt-2 text-white text-xs sm:text-sm md:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceWith;
