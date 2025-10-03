'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Efecto para cerrar el menú al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        // Solo agregar el listener si el menú está abierto
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <nav id="navbar" className="border-yellow-500 mt-2 border-2 rounded-3xl fixed w-full max-w-[110rem] left-1/2 transform -translate-x-1/2 p-4 flex flex-wrap shadow-xl backdrop-blur-sm z-50 bg-gray-900/90">
            {/* Large Screen*/}
            <div className="hidden flex-grow lg:flex lg:items-center lg:w-auto space-x-4">
                <div>
                    <a href="/cv.pdf" download="Hector Lazcano CV.pdf" className="inline-block text-md px-4 py-2 leading-none border rounded text-slate-200 hover:text-black border-yellow-500 hover:border-transparent hover:bg-yellow-500 mt-4 lg:mt-0">
                        Download CV
                    </a>
                </div>
                <div className="text-md space-x-3">
                    <Link href="/projects" className="block lg:inline-block lg:mt-0 font-bold text-slate-200 hover:text-yellow-500 hover:font-light">
                        Projects
                    </Link>
                    <Link href="/contact" className="block lg:inline-block lg:mt-0 font-bold text-slate-200 hover:text-yellow-500 hover:font-light">
                        Contact
                    </Link>
                </div>

            </div>

            {/* Small screens */}
            <div className="block lg:hidden" ref={menuRef}>
                <button 
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-slate-200 border-yellow-500 hover:text-white hover:border-white transition-colors duration-300"
                    aria-label="Toggle menu"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
                
                {/* Small screen menu */}
                <div className={`bg-gray-900/90 absolute left-0 top-full mt-0.5 shadow-xl rounded-lg py-2 px-4 w-36 ml-0.5 z-50 border-1 border-yellow-500 transition-all duration-300 ${
                    isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
                }`}>
                    <Link 
                        href="/projects" 
                        className="block text-sm py-2 text-slate-400 hover:text-white"
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/contact" 
                        className="block text-sm py-2 text-slate-400 hover:text-white"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                    <div className="border-t border-yellow-500 my-2"></div>
                    <a 
                        href="/cv.pdf" 
                        download="Hector Lazcano CV.pdf" 
                        className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-yellow-500 hover:border-transparent hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div className="flex items-center flex-grow justify-end text-white mr-1">
                <Link href="/">
                    <span className="font-semibold text-lg tracking-tight hover:text-xl hover:underline hover:text-yellow-500">Hector S. Lazcano</span>
                </Link>
            </div>
        </nav>

    )
}

export default Navbar;