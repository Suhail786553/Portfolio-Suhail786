import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectData from './data/work.json'; 

function Work() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 1000 });
    setProjects(projectData);
  }, []);

  return (
    <div className='font-mono text-3xl font-bold m-10' id='work'>
      <h1 className='text-4xl mb-6 text-white'>Work 💼</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='card font-mono text-base font-semibold rounded-lg p-5 border-cyan-400	border shadow-lg transition-transform transform hover:scale-105'
            data-aos={project.id === 1 || project.id === 3 ? 'fade-right' : 'fade-left'}
          >
            <h2 className='text-2xl text-sky-400 mb-2'>{project.title}</h2>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className='w-full h-48 object-cover rounded-lg my-4 cursor-pointer transition-transform transform hover:scale-105'
              />
            </a>

            <p className='text-black-300 mb-4'>{project.description}</p>
            <span className='text-black-400 italic'>{project.technologies}</span>
            <div className='flex justify-between mt-4'>
              <a
                href={project.liveLink}
                className='flex items-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition-all duration-300'
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className='mr-2' />
                Live Demo
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className='flex items-center bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded transition-all duration-300'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className='mr-2' />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
