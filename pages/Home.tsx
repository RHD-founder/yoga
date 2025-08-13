"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  ClassesSection,
  InstructorSection,
  PricingSection
} from '../types';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const instructorRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const classesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations - Immediate on page load with smooth stagger
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set([heroTextRef.current, heroImageRef.current], { opacity: 0 });
    gsap.set(heroTextRef.current, { y: 50 });
    gsap.set(heroImageRef.current, { scale: 0.8 });

    // Animate text content first
    tl.to(heroTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
      // Then animate image with slight overlap
      .to(heroImageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "back.out(1.2)"
      }, "-=0.3");

    // Services animation
    gsap.fromTo(servicesRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // About animation
    gsap.fromTo(aboutRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Classes animation
    gsap.fromTo(classesRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: classesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Instructor animation
    gsap.fromTo(instructorRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: instructorRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Pricing animation
    gsap.fromTo(pricingRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Benefits animation
    gsap.fromTo(benefitsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection
        heroRef={heroRef}
        heroTextRef={heroTextRef}
        heroImageRef={heroImageRef}
      />
      <ServicesSection servicesRef={servicesRef} />
      <AboutSection aboutRef={aboutRef} />
      <ClassesSection classesRef={classesRef} />
      <InstructorSection instructorRef={instructorRef} />

      <PricingSection pricingRef={pricingRef} />
    </div>
  );
};

export default Home;
