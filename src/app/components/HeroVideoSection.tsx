'use client';

import React from 'react';

const HeroVideoSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://aliensgroupmedia.s3.ap-south-1.amazonaws.com/Website+Hero+Section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-cursive">
          Futuristic. Serene. Yours
        </h1>
      </div>
    </div>
  );
};

export default HeroVideoSection;
