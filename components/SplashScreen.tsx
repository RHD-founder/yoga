import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const splashRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // Initial setup
    gsap.set([logoRef.current, textRef.current], { 
      opacity: 0, 
      y: 30, 
      scale: 0.9 
    });

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to([logoRef.current, textRef.current], {
      opacity: 0,
      y: -20,
      scale: 1.1,
      duration: 0.6,
      ease: "power2.in"
    }, "+=0.5")
    .to(splashRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div 
      ref={splashRef}
      className="fixed inset-0 bg-warm-beige flex items-center justify-center z-50"
    >
      <div className="text-center">
        <div ref={logoRef} className="mb-6">
          <div className="w-20 h-20 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-large">
            <div className="w-12 h-12 bg-warm-beige rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-warm-brown rounded-full"></div>
            </div>
          </div>
        </div>
        <div ref={textRef}>
          <h1 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-3">THE YOGA STUDIO</h1>
          <p className="text-warm-gray font-inter">Mind • Body • Soul</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;