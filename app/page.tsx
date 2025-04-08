import React from "react";


export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <h1 className="text-6xl font-bold text-white relative inline-block">
        Full Stack Developer
        <span className="absolute -z-10 bottom-0 left-0 w-full h-1 bg-teal-400 transform origin-left animate-pulse "></span>
      </h1>
      
      <p className="text-slate-400 text-sm">Welcome to my portfolio! Here, you'll find a collection of my projects and experiences that showcase my skills and passion for technology.</p>
      <p>
      I'm an electronic engineer who decided to dive into the world of full-stack development, and I haven't looked back since! With over 5 years of experience, I love crafting high-quality, maintainable, and scalable applications. Staying curious and keeping up with emerging technologies is what keeps me excited about building innovative solutions every day.
      </p>
    </div>
  );
}
