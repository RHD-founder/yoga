import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-warm-beige">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-8">Contact Us</h1>
        <p className="text-lg text-warm-gray font-inter leading-relaxed">
          Ready to begin your wellness journey? Get in touch with us to book your first class
          or learn more about our offerings.
        </p>
      </div>
    </div>
  );
};

export default Contact;