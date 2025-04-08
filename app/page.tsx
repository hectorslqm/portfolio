'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const cards = [
    {
      id: 1,
      title: "Who I Am",
      content: "I'm a full-stack developer fueled by curiosity, growth, and the joy of building tech that actually makes a difference."
    },
    {
      id: 2,
      title: "What I Do",
      content: `With over ${yearsOfExperience} years of experience, I specialize in creating robust, clean, and scalable applications that solve real-world problems.`
    },
    {
      id: 3,
      title: "My Philosophy",
      content: "I believe in continuous learning, thoughtful design, and the power of technology to make a real impact. Curiosity is my compass."
    }
  ];

  return (
    <div className="min-h-dvh p-2 md:p-6 font-sans">
      {/* Hero Section with Photo on Right */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-16 mt-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white relative inline-block">
            Full-Stack Developer
            <span className="absolute -z-10 -bottom-1 left-0 w-full h-1 bg-teal-400 transform origin-left animate-pulse"></span>
          </h1>
                    
          <p className="text-slate-400 text-lg mt-2 mb-8">
            {`Welcome to my portfolio! Here, you'll find a collection of my projects and experiences that showcase my skills and passion for technology.`}
          </p>
          
          <p className="text-slate-300 text-2xl mb-8">
            {`Hi, My Name is Hector. I'm an electronic engineer who decided to dive into the world of full-stack development, and I haven't looked back since! With over ${yearsOfExperience} years of experience, I love crafting high-quality, maintainable, and scalable applications.`}
          </p>
          
          <div className="flex space-x-4">
            <Link href="/portfolio" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors duration-300 flex items-center space-x-2">
              <span>View Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 hover:bg-opacity-10 rounded-md transition-colors duration-300">
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Right side - Photo */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative">
            {/* Background elements */}
            <div className="absolute -z-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -top-10 -right-10"></div>
            <div className="absolute -z-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-10 -left-10"></div>
            
            {/* Photo frame with animation */}
            <div className="w-[16rem] rounded-lg overflow-hidden relative z-10 transform transition-transform hover:scale-105 duration-500">
                <img src="/images/me.png" alt="Profile" className="w-full h-full p-xobject-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-slate-200 rounded-lg p-6 transition-all duration-500 transform overflow-hidden relative cursor-pointer ${
              hoveredCard === card.id ? "scale-105 shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glowing border effect on hover */}
            <div className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-500 ${
              hoveredCard === card.id ? "opacity-100 border-teal-400" : "opacity-0 border-transparent"
            }`}></div>
            
            <h2 className={`text-xl font-semibold mb-3 relative z-10 transition-colors duration-300 ${
              hoveredCard === card.id ? "text-teal-400" : "text-slate-900"
            }`}>
              {card.title}
            </h2>
            
            <p className="text-slate-800 relative z-10">{card.content}</p>
          </div>
        ))}
      </div>
      
      {/* Skills Section with animated progress bars */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          My Skills
          <span className="absolute -z-10 -bottom-1 left-0 w-full h-1 bg-teal-400"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { skill: "Frontend Development", percentage: 75 },
            { skill: "Backend Development", percentage: 100 },
            { skill: "Database Management", percentage: 80 },
            { skill: "UI/UX Design", percentage: 75 }
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-white">{item.skill}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full animate-pulse"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Section with animated progress bars */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          My Languages
          <span className="absolute -z-10 -bottom-1 left-0 w-full h-1 bg-teal-400"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { skill: "Spanish", percentage: 100 },
            { skill: "English", percentage: 90 },
            { skill: "Polish", percentage: 20 },
            { skill: "German", percentage: 15 }
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-white">{item.skill}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full animate-pulse"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}