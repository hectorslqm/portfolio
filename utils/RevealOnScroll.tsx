'use client';
import React, { useEffect, useRef, useState } from "react";

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

const directionEffects = {
  up: (baseClasses: string) => `${baseClasses} opacity-0 translate-y-10`,
  down: (baseClasses: string) => `${baseClasses} opacity-0 -translate-y-10`,
  left: (baseClasses: string) => `${baseClasses} opacity-0 translate-x-10`,
  right: (baseClasses: string) => `${baseClasses} opacity-0 -translate-x-10`,
  fade: (baseClasses: string) => `${baseClasses} opacity-0 scale-95`,
};
interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  direction = 'up' 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out transform";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
    }

    if (direction in directionEffects) return directionEffects[direction](baseClasses);
    return `${baseClasses} opacity-0 translate-y-10`;
  };

  return (
    <div
      ref={ref}
      className={getAnimationClasses()}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
