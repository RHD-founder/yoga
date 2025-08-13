"use client";
import React from 'react';
import Link from 'next/link';

interface ClassesSectionProps {
    classesRef: React.RefObject<HTMLDivElement>;
}

const ClassesSection: React.FC<ClassesSectionProps> = ({ classesRef }) => {
    return (
        <section id="classes" ref={classesRef} className="py-24 bg-amber-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-4">
                        Find Your Preferred Class Time
                    </h2>
                    <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                        Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipiscing.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="min-w-[800px] sm:min-w-full">
                            <table className="w-full border-separate border-spacing-0">
                                <thead>
                                    <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black first:rounded-tl-2xl">Monday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black">Tuesday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black">Wednesday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black">Thursday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black">Friday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black">Saturday</th>
                                        <th className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-800 font-inter font-semibold text-sm sm:text-lg border border-black last:rounded-tr-2xl">Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Row 1 - Morning Classes */}
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">06:00 - 07:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">05:00 - 06:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">08:00 - 09:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">06:00 - 07:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">10:00 - 11:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">08:00 - 09:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">07:00 - 08:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 2 - Late Morning/Mid-day Classes */}
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">06:00 - 07:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">07:00 - 08:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">10:00 - 11:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">11:00 - 12:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">11:00 - 12:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">09:00 - 10:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">08:00 - 09:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 3 - Afternoon Classes */}
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">12:00 - 13:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">09:00 - 10:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">13:00 - 14:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">12:00 - 13:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">16:00 - 17:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">09:00 - 10:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">09:00 - 10:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 4 - Evening Classes */}
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base first:rounded-bl-2xl">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">18:00 - 19:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Hatha Yoga</div>
                                                <div className="text-gray-600 font-inter">Jhony Sha</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">14:00 - 15:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">18:00 - 19:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">17:00 - 18:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">16:00 - 17:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Baddha Yoga</div>
                                                <div className="text-gray-600 font-inter">Martin Loo</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">16:00 - 17:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-6 sm:py-8 text-center border border-black text-xs sm:text-base last:rounded-br-2xl">
                                            <div className="space-y-1 sm:space-y-2">
                                                <div className="text-gray-600 font-inter font-medium">11:00 - 12:00</div>
                                                <div className="text-sm sm:text-lg text-gray-800 font-inter font-semibold">Yoga Sculpt</div>
                                                <div className="text-gray-600 font-inter">Geroge</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/" className="bg-amber-600 text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-amber-700 transition-colors">
                        View All Classes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
