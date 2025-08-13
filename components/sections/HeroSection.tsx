"use client";
import React from 'react';

interface HeroSectionProps {
    heroRef: React.RefObject<HTMLDivElement>;
    heroTextRef: React.RefObject<HTMLDivElement>;
    heroImageRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRef, heroTextRef, heroImageRef }) => {
    return (
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-12 relative overflow-hidden bg-[#F8F6F3]">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Mobile Layout: Image first, then content */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:items-center">

                    {/* Top Arch Image - First on mobile, left on desktop */}
                    <div ref={heroImageRef} className="relative flex justify-center lg:justify-start order-1 lg:order-1 opacity-0 transition-opacity duration-1000 ease-out">
                        <div className="relative lg:-ml-40">
                            {/* Top arched image frame - TOP ARCH */}
                            <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[500px] bg-white shadow-xl overflow-hidden arch-top">
                                <img
                                    src="filler4-img-01.jpg"
                                    alt="Top arch yoga image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Second on mobile, right on desktop */}
                    <div ref={heroTextRef} className="space-y-6 lg:space-y-8 text-center lg:text-left relative order-2 lg:order-2 lg:-ml-48 opacity-0 transition-opacity duration-1000 ease-out">
                        <div className="space-y-4 lg:space-y-6">
                            {/* Responsive heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 leading-tight">
                                Mind Relax<br />
                                <span className="text-amber-600 font-normal">Revitalize</span><br />
                                Self Care
                            </h1>

                            {/* Responsive paragraph */}
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                                Tellus integer feugiat scelerisque varius. Cursus turpis massa tincidunt dui ut. Porttitor leo a diam sollicitudin.
                            </p>

                            {/* Button Section - Responsive */}
                            <div className="pt-4 lg:pt-4">
                                <button className="inline-flex items-center gap-2 lg:gap-3 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 bg-transparent border border-gray-400 text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-300 text-base lg:text-lg">
                                    Book Class
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Bottom Arch Image - Below button on mobile, positioned on desktop */}
                            <div className="flex justify-center mt-8 lg:hidden">
                                <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-white shadow-xl overflow-hidden arch-bottom">
                                    <img
                                        src="filler4-img-02.jpg"
                                        alt="Bottom arch wellness image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Arch Image - Desktop positioned version */}
                <div className="absolute top-20 right-10 hidden lg:block z-20">
                    <div className="relative w-[300px] h-[300px] bg-white shadow-xl overflow-hidden"
                        style={{ borderRadius: '0 0 150px 150px' }}>
                        <img
                            src="filler4-img-02.jpg"
                            alt="Bottom arch wellness image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
