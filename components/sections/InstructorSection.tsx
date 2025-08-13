"use client";
import React from "react";

interface InstructorSectionProps {
    instructorRef: React.RefObject<HTMLDivElement>;
}

const instructors = [
    {
        name: "Jessica John",
        role: "Lead Instructor",
        desc: "500+ hours certified with 8 years of teaching experience specializing in Hatha and Vinyasa yoga.",
        img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop",
        expertise: ["Hatha", "Vinyasa", "Certified"]
    },
    {
        name: "Sarah Mitchell",
        role: "Meditation Teacher",
        desc: "Specializes in mindfulness meditation and breathwork with a background in psychology and wellness.",
        img: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop",
        expertise: ["Meditation", "Mindfulness", "Psychology"]
    },
    {
        name: "Maria Rodriguez",
        role: "Prenatal Specialist",
        desc: "Certified prenatal yoga instructor helping expecting mothers maintain wellness throughout pregnancy.",
        img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop",
        expertise: ["Prenatal", "Wellness", "Certified"]
    },
];

const InstructorSection: React.FC<InstructorSectionProps> = ({ instructorRef }) => {
    return (
        <section id="instructor" ref={instructorRef} className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-block mb-8">
                        <span className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-bold rounded-full shadow-lg">
                            ✨ Expert Team
                        </span>
                    </div>
                    <h2 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
                        Meet Your Yoga Instructors
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Learn from experienced and certified yoga instructors who are passionate about sharing the transformative power of yoga.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {instructors.map((instructor, index) => (
                        <div
                            key={index}
                            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3"
                        >
                            {/* Full image background */}
                            <div className="absolute inset-0">
                                <img
                                    src={instructor.img}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                {/* Gradient overlay for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                {/* Expertise badges */}
                                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                                    {instructor.expertise.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Name and role */}
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                    <h3 className="text-4xl font-bold mb-3 text-white">
                                        {instructor.name}
                                    </h3>
                                    <p className="text-amber-300 font-semibold text-xl mb-4">
                                        {instructor.role}
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300">
                                    <p className="text-gray-200 text-base leading-relaxed">
                                        {instructor.desc}
                                    </p>
                                </div>

                                {/* Hover indicator */}
                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-400">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats on hover */}
                            <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-500">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl">
                                    <div className="text-center">
                                        <div className="text-amber-600 font-bold text-base">8+ Years</div>
                                        <div className="text-gray-600 text-sm">Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-20">
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center mx-auto space-x-3 group">
                        <span>View All Instructors</span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    <p className="text-gray-500 mt-8 text-base">
                        ✨ Join our community of certified professionals
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
