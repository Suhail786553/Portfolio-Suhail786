import React from 'react';

function ExperienceWith() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 mt-10 mb-6 text-base font-bold font-mono p-4">
      <span className='text-4xl text-black font-extrabold'>EXPERIENCE WITH</span>
      <div className='Skills flex flex-wrap justify-center gap-8 mt-6'>
        {[
          { name: "HTML", img: "/icons8-html-logo-48.png" },
          { name: "CSS", img: "/icons8-css-48.png" },
          { name: "JavaScript", img: "/icons8-javascript-48.png" },
          { name: "TypeScript", img: "/icons8-typescript-48.png" },
          { name: "React", img: "/icons8-react-js-48.png" },
          { name: "Tailwind CSS", img: "/icons8-tailwind-css-48.png" },
          { name: "MySQL", img: "/icons8-mysql-48.png" },
          { name: "Git", img: "/icons8-git-48.png" },
          { name: "WordPress", img: "/icons8-wordpress-48.png" },
          { name: "Figma", img: "/icons8-figma-48.png" },
        ].map((skill, index) => (
          <div key={index} className="skill-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <img src={skill.img} alt={skill.name} className="h-24 w-24" /> 
            <span className="mt-2 text-black">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceWith;
