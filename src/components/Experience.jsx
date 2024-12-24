import React from 'react';

const experiences = [
  {
    company: 'ApricityTS',
    role: 'Software Developer Intern',
    duration: 'September 2024 – Present',
    location: 'Remote',
    responsibilities: [
      'Developed and deployed fully functional websites independently, utilizing modern web development technologies.',
      'Collaborated within a team of 30 developers to deliver a feature-rich web platform, ensuring seamless performance and user experience.',
      'Optimized codebases and workflows, achieving a 400% increase in website performance and load times.',
      'Streamlined development processes, reducing project delivery timelines by 50% through efficient project management and innovative coding practices.'
    ],
    logo: 'https://yt3.googleusercontent.com/_mtf7vCqvNqWvS8Q6VfIgEZJ5PwnUP9fuE78VzPDMoc4pTVA6crwEwSef1HejeY1BRqLtuJpIr4=s160-c-k-c0x00ffffff-no-rj'
  },
];

function Experience() {
  return (
    <>
    <div className="flex flex-col items-start text-3xl font-mono font-bold text-start p-8 rounded-lg border border-cyan-400	 shadow-2xl max-w-3xl mx-auto mt-10 transition-transform transform hover:scale-105 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center mb-2 space-x-3">
            {/* <img 
              src={""} 
              alt={""} 
              className="w-8 h-8 object-contain"
            /> */}
            <h2 className="text-2xl font-semibold">{experience.company}</h2>
          </div>
          <p className="text-xl text-sky-400">{experience.role}</p>
          <p className="text-sm text-sky-400">{experience.duration} - {experience.location}</p>
          <ul className="list-disc pl-5 mt-4">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-base text-white mb-2">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
}

export default Experience;
