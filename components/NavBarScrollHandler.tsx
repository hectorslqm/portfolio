// NavbarScrollHandler.tsx (componente cliente)
'use client'

import { useEffect } from 'react';

export default function NavbarScrollHandler() {
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.transition = 'transform .5s ease';
        }
        function handleScroll() {
        const currentScrollPos = window.scrollY;
        const navbar = document.getElementById('navbar');
        
        if (navbar) {
            if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
            navbar.style.transform = 'translateY(0)';
            } else {
            navbar.style.transform = 'translateY(-100%)';
            }
        }
        
        prevScrollPos = currentScrollPos;
        }
        
        if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        
        }
        
        return () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
        };
    }, []);
    
    return null;
}