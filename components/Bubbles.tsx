'use client'

import { useEffect, useRef } from 'react';

export default function BubbleEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  function createBubble() {
    if (!containerRef.current) return;
    
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size for the bubble
    const size = Math.random() * 20 + 10; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Initial Position on the X-axis
    const startPositionX = Math.random() * 100;
    bubble.style.left = `${startPositionX}%`;
    
    // Initial position slightly below the screen
    bubble.style.bottom = '-50px';
    
    // random speed (animation duration) between 5 and 20 seconds
    const speed = Math.random() * 70 + 5;
    bubble.style.animationDuration = `${speed}s`;
    
    // Add a slight delay before starting the animation
    // random delay between 0 and 10 seconds
    const delay = Math.random() * 10;
    bubble.style.animationDelay = `${delay}s`;
    
    // Add to the DOM
    containerRef.current.appendChild(bubble);
    
    // Delete the bubble after it completes the animation
    // The total time is the sum of the speed and delay
    setTimeout(() => {
      if (bubble && bubble.parentNode === containerRef.current) {
        bubble.remove();
      }
    }, (speed + delay) * 1000);
  }
  
  useEffect(() => {
    // Create the initial bubbles
    const numBubbles = 30;
    for (let i = 0; i < numBubbles; i++) {
      createBubble();
    }
    
    // Create new bubbles every 2 seconds
    const interval = setInterval(() => {
      createBubble();
    }, 2000);
    
    // clear the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}