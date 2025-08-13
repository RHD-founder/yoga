"use client";
import React from 'react';

interface ServicesSectionProps {
    servicesRef: React.RefObject<HTMLDivElement>;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesRef }) => {
    return (
        <section id="services" ref={servicesRef} className="py-24 bg-white">
            <div className="max-w-full mx-auto px-6 lg:px-18">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-4">Online Yoga Class</h2>
                    <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                        Lorem suspendisse lobortis interdum posuere lorem ipsum dolor sit amet,
                        ipsum dolor sit amet consectetur adipiscing.
                    </p>
                </div>

                <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
                    {/* Beginner Yoga Class */}
                    <div className="group bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 p-8 min-h-[420px] flex flex-col justify-between relative">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 bg-opacity-30 rounded-full translate-y-12 -translate-x-12"></div>

                        {/* Header Section */}
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="w-24 h-24 bg-white rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500 border-2 border-white">
                                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Peaceful yoga instructor" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                                BEGINNER<br />YOGA CLASS
                            </h3>

                            <p className="text-sm text-gray-700 leading-relaxed mb-8 max-w-[240px]">
                                Begin your transformative journey with gentle poses designed for complete beginners. Build strength, flexibility, and inner peace at your own pace.
                            </p>
                        </div>

                        {/* Action Section */}
                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                                <button className="bg-white text-gray-800 px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:shadow-md transition-all duration-300 flex-1 min-w-0 group-hover:scale-105 shadow-sm">
                                    Every Weekend
                                </button>
                                <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:from-gray-700 hover:to-gray-800 hover:shadow-md transition-all duration-300 flex-1 min-w-0 group-hover:scale-105">
                                    Start From 8:00 AM
                                </button>
                            </div>


                        </div>
                    </div>

                    {/* Standing Yoga */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Instructor</div>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Standing Yoga</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Build strength and stability through powerful<br />
                                standing poses. Perfect for improving posture,<br />
                                balance, and developing a strong foundation<br />
                                for your yoga practice.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>May 2, 2024 • 10:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span>Instructor: <span className="font-semibold text-emerald-600">Edwin Kumar</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="h-56 bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instructor demonstrating standing yoga poses" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Meditation */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                <div className="text-xs text-purple-600 font-semibold uppercase tracking-wider">Mindfulness</div>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">Meditation</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Discover inner peace through guided meditation<br />
                                sessions. Learn breathing techniques, mindfulness<br />
                                practices, and stress-relief methods for<br />
                                mental clarity and emotional balance.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>May 3, 2024 • 6:30 AM Daily</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span>Guide: <span className="font-semibold text-purple-600">Sascha Williams</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="h-56 bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Serene meditation session in nature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Marjchyasana */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                                <div className="text-xs text-rose-600 font-semibold uppercase tracking-wider">Advanced Practice</div>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">Marjchyasana</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Master the art of spinal twists with this<br />
                                traditional asana sequence. Improve spinal<br />
                                mobility, aid digestion, and release tension<br />
                                through guided twisting movements.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-rose-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>May 1, 2024 • 11:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-rose-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span>Master: <span className="font-semibold text-rose-600">Janneta Rodriguez</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="h-56 bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Advanced yoga practitioner in spinal twist pose" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Prenatal Yoga */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                                <div className="text-xs text-teal-600 font-semibold uppercase tracking-wider">Prenatal Care</div>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">Prenatal Yoga</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Gentle, safe yoga practice designed specifically<br />
                                for expecting mothers. Strengthen your body,<br />
                                reduce pregnancy discomfort, and prepare<br />
                                for childbirth with mindful movement.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>May 4, 2024 • 8:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span>Specialist: <span className="font-semibold text-teal-600">Leana Thompson</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="h-56 bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pregnant woman practicing gentle yoga poses" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Yoga Studio Promo */}
                    <div className="group bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-300 bg-opacity-20 rounded-full translate-y-16 -translate-x-16"></div>

                        <div className="p-8 text-white relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="w-10 h-10 bg-white rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                    </div>
                                    <div className="text-sm font-semibold mb-2 opacity-90">Zenith Wellness Studio</div>
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">YOGA<br />Studio</h2>
                            <p className="text-sm opacity-90 mb-8 leading-relaxed">
                                Transform your life through the ancient<br />
                                practice of yoga. Join our welcoming<br />
                                community and discover strength, flexibility,<br />
                                and inner peace guided by certified<br />
                                instructors in our serene studio space.
                            </p>
                            <div className="mb-6">
                                <div className="text-sm mb-2 opacity-75 uppercase tracking-wider">Lead Instructor</div>
                                <div className="text-xl font-bold group-hover:text-yellow-200 transition-colors duration-300">JESSICA JOHN</div>
                                <div className="text-sm opacity-75 mt-1">500-Hour Certified • 8+ Years Experience</div>
                            </div>
                            <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                                Join Our Studio
                            </button>
                            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white bg-opacity-15 rounded-tl-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Yoga instructor Jessica John in peaceful pose" className="w-full h-full object-cover rounded-tl-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

