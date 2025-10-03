'use client'
import React from "react";
import Link from "next/link";
import Typewriter from "@/utils/Typewriter";
import Image from "next/image";
import WorkTimeline from "@/components/WorkTimeLine";
import RevealOnScroll from "@/utils/RevealOnScroll";

export default function HomePage() {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const mainText = `Hi, I'm Héctor.
    I'm a Full Stack Developer with over ${yearsOfExperience} years of experience building scalable, maintainable, and high-performance applications.
            I specialize in both frontend and backend development using modern technologies like TypeScript, React, Next.js, Python, Java, and SQL/NoSQL databases.`;

  return (
    <div className="min-h-dvh p-8 md:p-6">
      {/* Hero Section with Photo on Right */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-16 mt-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-3/5">
          <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
            <span className="inline-block relative">
              <span className="text-white">F</span>
              <span className="text-yellow-400">ull</span>
              <span className="text-white">-</span>
              <span className="text-white">S</span>
              <span className="text-yellow-400">tack</span>
              <span className="text-white"> D</span>
              <span className="text-yellow-400">eveloper</span>
              <span className="absolute left-2 -bottom-2 w-full h-3 bg-yellow-400 opacity-80 blur-md animate-pulse" />
            </span>
          </h1>
          <RevealOnScroll direction="right">
            <p className="text-slate-300 text-2xl mb-8">
              {mainText}
            </p>
          </RevealOnScroll>
          <p className="text-slate-400 text-lg mt-2 mb-8 flex flex-col ">
            <Typewriter text={`I'm open to new opportunities where I can continue learning, growing, and making an impact through great software.`} speed={55} />
          </p>
          <div className="flex space-x-4">
            <Link href="/projects" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md transition-colors duration-300 flex items-center space-x-2">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500 hover:bg-opacity-10 rounded-md transition-colors duration-300">
              Contact Me
            </Link>
          </div>
        </div>
        {/* Right side - Photo */}
        
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="relative w-3/4 h-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 transition-transform duration-700 hover:scale-105 bg-black group">
                
                <RevealOnScroll direction="left">
                <div className="absolute inset-0 z-0 bg-cyan-400 opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
                  <Image
                    src="/images/me.png"
                    alt="Héctor Lazcano"
                    className="relative z-10 w-full h-full object-cover"
                    width={700}
                    height={700}
                    priority
                  />
                </RevealOnScroll>
              </div>
            </div>
          </div>

      </div>


      <WorkTimeline />
      {/* Skills Section with animated progress bars */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          My Skills
          <span className="absolute -z-10 -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
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
                  className="bg-gradient-to-r from-yellow-400 to-white h-2 rounded-full animate-pulse"
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
          <span className="absolute -z-10 -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
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
                  className="bg-gradient-to-r from-yellow-400 to-white h-2 rounded-full animate-pulse"
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