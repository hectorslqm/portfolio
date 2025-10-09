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

  const mainTextParagraphs = [
    () => (
      <div className="text-white">
        Hi, I&apos;m Héctor, a Full Stack Developer passionate about turning complex ideas into scalable, reliable, and user-centered software solutions.
      </div>
    ),
    () => (
      <div className="text-slate-400">
        I help companies build and scale modern applications that are not only high-performance but also maintainable in the long run. My work bridges the gap between business goals and technical execution, making sure products are both effective and enjoyable to use.
      </div>
    ),
  ];

  const cards = [
    {
      title: "My Experience",
      description: () => (
        <>
          With over <strong>{yearsOfExperience}</strong> years of experience in frontend and backend development, I specialize in{" "}
          <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Python</strong>, <strong>Java</strong>, and{" "}
          <strong>SQL/NoSQL</strong> databases.
          <br />
          I love designing responsive interfaces, optimizing data workflows, and architecting cloud-ready, scalable systems.
        </>
      ),
    },
    {
      title: "My Mission",
      description: () => (
        <>
          I’m on a mission to help teams move faster, ship better code, and deliver real value through technology that lasts.
        </>
      ),
    },
  ];

  //TODO: Add a section with my main tech stack
  // const myStack = [
  //   "JavaScript", "TypeScript", "Java", "Python", "React", "NextJS", "NodeJS", "Flask", "SQL", "NoSQL", "MongoDB", "PostgreSQL", "Azure", "Git", "CI/CD"
  // ]
  return (
    <div className="min-h-dvh">
      {/* Hero Section with Photo on Right */}
      <section className="from-sky-950 to-black bg-gradient-to-tl via-[1%] via-sky-900 mt-[-6rem] pt-29 pb-2">
        <div className="mx-auto px-4 md:px-6 max-w-[110rem] flex flex-col md:flex-row md:items-start justify-between gap-2">
          <div className="w-full">
            <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
              <span className="inline-block relative">
                <span className="text-white">F</span>
                <span className="text-yellow-400">ull</span>
                <span className="text-white">-</span>
                <span className="text-white">S</span>
                <span className="text-yellow-400">tack</span>
                <span className="text-white"> D</span>
                <span className="text-yellow-400">eveloper</span>
                <span className="absolute left-2 -bottom-0 w-full h-4 bg-yellow-400 opacity-80 blur-md animate-pulse" />
              </span>
            </h1>
            <div className="w-full">
              {/* Photo*/}
              <div className="w-full justify-center sm:justify-end flex md:hidden bg-transparent relative">
                {/* Blur background*/}
                {/* <div className="absolute inset-0 bg-cyan-300 blur-3xl opacity-15 pointer-events-none z-0"></div> */}
                <div className="relative z-10">
                  <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 group-hover:opacity-30 transition-opacity duration-400" />
                    <RevealOnScroll direction="left">
                      <Image
                        src="/images/me.png"
                        alt="Héctor Lazcano"
                        className="relative z-10 w-full h-full object-cover"
                        sizes="250rem"
                        width={0}
                        height={0}
                        priority
                      />
                    </RevealOnScroll>
                  </div>
                </div>
              </div>
            </div>
            {/* Main text paragraphs with RevealOnScroll */}
            <RevealOnScroll direction="right">
              <div className="mb-8">
                {mainTextParagraphs.map((paragraph, index) => (
                    <div key={index} className="text-2xl leading-relaxed text-justify">
                      <br />
                      {paragraph()}
                    </div>
                ))}
              </div>
            </RevealOnScroll>
            <div className="flex space-x-4">
              <Link href="/projects" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md transition-colors duration-300 flex items-center space-x-2">
                <span>View Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500 hover:bg-opacity-10 rounded-md transition-colors duration-300">
                <Typewriter text="Contact Me" speed={85} />
              </Link>
            </div>
          </div>
          <div className="w-full">
            {/* Photo*/}
            <div className="w-full justify-center sm:justify-end hidden md:flex bg-transparent relative">
              {/* Blur background*/}
              {/* <div className="absolute inset-0 bg-cyan-300 blur-3xl opacity-15 pointer-events-none z-0"></div> */}
              
              {/* Contenedor de la imagen */}
              <div className="relative z-10">
                <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 group-hover:opacity-30 transition-opacity duration-400" />
                  <RevealOnScroll direction="left">
                    <Image
                      src="/images/me.png"
                      alt="Héctor Lazcano"
                      className="relative z-10 w-full h-full object-cover"
                      sizes="250rem"
                      width={0}
                      height={0}
                      priority
                    />
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience*/}
      <section className="bg-slate-100 border-t-8 border-yellow-400 mb-18">
        <div className="mx-auto px-4 md:px-6 max-w-[110rem] py-8 w-full">
          <div className="text-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <div key={index} className="p-4 ">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <div className="text-slate-800">
                    {card.description()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <WorkTimeline />
      </section>
      {/* Skills Section with animated progress bars */}
      <section className="hidden">
        <div className=" mx-auto px-4 md:px-6 max-w-[110rem]">
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
      </section>
    </div>
  );
}