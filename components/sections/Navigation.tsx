"use client";
import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeMobileMenu();
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className={`logo-text font-bold text-lg ${isScrolled ? "text-slate-800" : "text-slate-800"
                            }`}
                    >
                        The Yoga Studio
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {["Home", "Services", "About Us", "Classes", "Instructors", "Pricing"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        scrollToSection(item.toLowerCase().replace(" ", ""))
                                    }
                                    className={`transition-colors ${isScrolled
                                        ? "text-slate-700 hover:text-amber-600"
                                        : "text-slate-800 hover:text-amber-600"
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Book Now */}
                        <button
                            className={`hidden lg:flex border-2 px-6 py-2 rounded-full font-medium transition-all duration-300 items-center space-x-2 ${isScrolled
                                ? "border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                                : "border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                                }`}
                        >
                            Book Now
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        {/* Mobile Hamburger - Professional Animation */}
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
                        >
                            {/* First line */}
                            <span
                                className={`absolute w-6 h-0.5 bg-slate-800 rounded transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                    ? 'rotate-45'
                                    : '-translate-y-2'
                                    }`}
                            ></span>

                            {/* Second line */}
                            <span
                                className={`absolute w-6 h-0.5 bg-slate-800 rounded transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                    ? 'opacity-0'
                                    : 'opacity-100'
                                    }`}
                            ></span>

                            {/* Third line */}
                            <span
                                className={`absolute w-6 h-0.5 bg-slate-800 rounded transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                    ? '-rotate-45'
                                    : 'translate-y-2'
                                    }`}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div className="px-6 py-6 space-y-4">
                    {["Home", "Services", "About Us", "Classes", "Instructors", "Pricing"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    scrollToSection(item.toLowerCase().replace(" ", ""))
                                }
                                className="block w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-gray-50 transition"
                            >
                                {item}
                            </button>
                        )
                    )}

                    {/* Mobile Book Now */}
                    <div className="pt-4 border-t border-gray-200 mt-4">
                        <button className="w-full border-2 border-slate-800 text-slate-800 px-6 py-3 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Book Now</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
