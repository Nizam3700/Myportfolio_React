import React from 'react';
import verified from '../Assests/verifed.webp';
import projectImage from '../Assests/project.jpg';
import dsa from '../Assests/skills.png';

const MySkills = () => {
  return (
    
    <div className="w-full max-w-4xl mx-auto p-6 bg-white text-gray-900 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 border-2 border-gray-900 mt-12" >
      <div className="flex   md:flex-row justify-around items-center gap-6">
        {/* Skills Section */}
        <div className="flex flex-col items-center text-center">
          <img className="w-14 h-14 mb-2" src={verified} alt="Modern Skills" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">21+</div>
          <div className="text-lg font-normal">Modern Skills</div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-center text-center">
          <img className="w-14 h-14 mb-2" src={projectImage} alt="Professional Projects" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">10+</div>
          <div className="text-lg font-normal">Professional Projects</div>
        </div>

        {/* DSA Section */}
        <div className="flex flex-col items-center text-center">
          <img className="w-14 h-14 mb-2" src={dsa} alt="Data Structures & Algorithms" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">200+</div>
          <div className="text-lg font-normal">DSA Problems Solved</div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
