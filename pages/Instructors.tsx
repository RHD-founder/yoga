import React from 'react';

const Instructors: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-warm-beige">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-8">Our Instructors</h1>
        <p className="text-lg text-warm-gray font-inter leading-relaxed">
          Meet our experienced and passionate yoga instructors who are dedicated to guiding you 
          on your wellness journey.
        </p>
      </div>
    </div>
  );
};

export default Instructors;