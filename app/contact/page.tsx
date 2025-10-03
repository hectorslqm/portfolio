import React from "react";
import { Tags } from "@/app/data/Tags"
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/utils/RevealOnScroll";

export default function Contact() {
  // Datos de contacto
  const contactInfo = {
    phone: "+1 (979) 3 26 26 70",
    email: "hectorslqm@gmail.com",
    location: "College Station, TX",
    gitHub: "hectorslqm"
  };

  type techType = {
    name: keyof typeof Tags
  }
  const technologies: techType[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "Python" },
    { name: "React" },
    { name: "NextJS" },
    { name: "Tailwind" },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-9 min-vh-screen">
      {/* Business Card */}
      <RevealOnScroll>

        <div className="w-full max-w-lg rounded-xl border-4 border-yellow-400 bg-gray-200 shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-500">

          {/* Card Content */}
          <div className="p-8">
            {/* Name and title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Hector S. Lazcano</h1>
              <p className="text-yellow-600 text-lg">Full Stack Developer</p>
              <div className="w-16 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center space-x-4 text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-slate-800 hover:underline">{contactInfo.phone}</a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-slate-800 hover:underline">{contactInfo.email}</a>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4 text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.827.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <Link href="https://github.com/hectorslqm/" className="text-slate-800">{contactInfo.gitHub}</Link>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-4 text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <Link href="https://maps.app.goo.gl/So7rBUKWii3rsUgU8" className="text-slate-800">{contactInfo.location}</Link>
              </div>
            </div>

            {/* Technology Icons */}
            <div>
              <h2 className="text-slate-900 text-lg mb-4">Technologies</h2>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center w-12 h-12 rounded-full justify-center mb-2 bg-slate-900">
                    <Image
                      src={Tags[tech.name]}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-3 bg-gray-800 hover:bg-slate-900 text-center">
            <Link
              href="https://www.linkedin.com/in/hector-lazcano-qm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-slate-200 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
              <span className="text-slate-200">{`Let's Connect!`}</span>
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}