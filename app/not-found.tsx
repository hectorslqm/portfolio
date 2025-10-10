'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number with gradient effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 bg-clip-text text-transparent">
            &lt;404&gt;
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-blue-500/10 blur-sm">
            &lt;404&gt;
          </div>
        </div>
        
        {/* Main message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Not Found
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            :&lt;
          </p>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
             Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <p className="text-slate-300 text-base md:text-lg">
            I recommend checking out my <span className="text-yellow-400 font-medium">home page</span> to explore my portfolio and projects.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            <span className="relative z-10">Go to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/projects"
            className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-md hover:shadow-yellow-400/10"
          >
            View Projects
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
          <div className="pt-8 text-slate-500 text-sm">
            Need help? You can <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors">contact me</Link>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  )
}