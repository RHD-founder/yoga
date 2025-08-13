"use client";
import React from 'react';

interface AboutSectionProps {
    aboutRef: React.RefObject<HTMLDivElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef }) => {
    return (
        <section id="about" ref={aboutRef} className="py-24" style={{ backgroundColor: '#E8E0D6' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-1">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    {/* Left Content - Class Listings */}
                    <div className="flex-1 lg:max-w-2xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl lg:text-6xl text-gray-800 mb-4" style={{ fontFamily: 'Elsie, serif', fontWeight: 400 }}>
                                Choose Your Class
                            </h2>
                            <button className="flex items-center gap-2 px-6 py-2 border border-gray-600 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300">
                                <span className="text-sm font-medium">View All</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Class Listings */}
                        <div className="space-y-6">
                            {/* Class 01 - Meditation */}
                            <div className="group cursor-pointer hover:bg-white/30 p-4 rounded-lg transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Elsie, serif' }}>01</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Elsie, serif', fontWeight: 400 }}>
                                            Meditation
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa.
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-300"></div>

                            {/* Class 02 - Relaxing Pose */}
                            <div className="group cursor-pointer hover:bg-white/30 p-4 rounded-lg transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Elsie, serif' }}>02</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Elsie, serif', fontWeight: 400 }}>
                                            Relaxing Pose
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-300"></div>

                            {/* Class 03 - Simhasana Yoga */}
                            <div className="group cursor-pointer hover:bg-white/30 p-4 rounded-lg transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Elsie, serif' }}>01</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Elsie, serif', fontWeight: 400 }}>
                                            Simhasana Yoga
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum.
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-300"></div>

                            {/* Class 04 - Balancing Yoga */}
                            <div className="group cursor-pointer hover:bg-white/30 p-4 rounded-lg transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Elsie, serif' }}>04</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Elsie, serif', fontWeight: 400 }}>
                                            Balancing Yoga
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tellus.
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Section - Content area for future use */}

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
