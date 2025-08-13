import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-warm-beige">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-playfair font-medium text-gray-800 mb-8">Blog</h1>
        <p className="text-lg text-warm-gray font-inter leading-relaxed">
          Explore our latest insights on yoga, wellness, mindfulness, and living a balanced life.
        </p>
      </div>
    </div>
  );
};

export default Blog;