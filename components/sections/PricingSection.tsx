"use client";
import React from 'react';

interface PricingSectionProps {
    pricingRef: React.RefObject<HTMLDivElement>;
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricingRef }) => {
    return (
        <section id="pricing" ref={pricingRef} className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-slate-800 mb-4">Membership Plans</h2>
                    <p className="text-slate-600 font-inter max-w-2xl mx-auto">
                        Choose the perfect plan that fits your lifestyle and budget. All plans include access to our beautiful studio space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* One Month Beginners */}
                    <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="mb-6">
                            <div className="text-sm text-amber-700 font-inter mb-1">One Month</div>
                            <div className="text-2xl font-playfair font-bold text-slate-800 mb-3">Beginners</div>
                            <div className="w-16 h-px bg-amber-300"></div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Tue - Fri : 6:00am to 10:00pm</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Trainer - Joe</span>
                            </div>
                        </div>

                        <p className="text-slate-600 font-inter text-sm mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex items-center justify-between mb-6">
                            <div className="text-3xl font-playfair font-bold text-slate-800">$50</div>
                            <div className="text-xs text-slate-600 font-inter">Include Tax, Accessories</div>
                        </div>

                        <button className="w-full border border-slate-400 bg-white text-slate-700 py-3 px-6 rounded-full font-inter font-medium hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2">
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Two Months Premium */}
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative">
                        <div className="mb-6">
                            <div className="text-sm text-slate-700 font-inter mb-1">Two Months</div>
                            <div className="text-2xl font-playfair font-bold text-slate-800 mb-3">Premium</div>
                            <div className="w-16 h-px bg-slate-400"></div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Tue - Fri : 6:00am to 9:00am</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Trainer - Jasmine</span>
                            </div>
                        </div>

                        <p className="text-slate-600 font-inter text-sm mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex items-center justify-between mb-6">
                            <div className="text-3xl font-playfair font-bold text-slate-800">$100</div>
                            <div className="text-xs text-slate-600 font-inter">Include Tax, Accessories</div>
                        </div>

                        <button className="w-full border border-slate-400 bg-amber-50 text-slate-700 py-3 px-6 rounded-full font-inter font-medium hover:bg-amber-100 transition-colors flex items-center justify-center space-x-2">
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Three Months Advanced */}
                    <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="mb-6">
                            <div className="text-sm text-amber-700 font-inter mb-1">Three Months</div>
                            <div className="text-2xl font-playfair font-bold text-slate-800 mb-3">Advanced</div>
                            <div className="w-16 h-px bg-amber-300"></div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Tue - Fri : 6:00am to 12:00pm</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-slate-700 font-inter text-sm">Trainer - Antony</span>
                            </div>
                        </div>

                        <p className="text-slate-600 font-inter text-sm mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex items-center justify-between mb-6">
                            <div className="text-3xl font-playfair font-bold text-slate-800">$160</div>
                            <div className="text-xs text-slate-600 font-inter">Include Tax, Accessories</div>
                        </div>

                        <button className="w-full border border-slate-400 bg-white text-slate-700 py-3 px-6 rounded-full font-inter font-medium hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2">
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
