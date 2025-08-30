import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
         style={{ backgroundImage: 'url(https://www.apple.com/v/home/bf/images/heroes/apple-vision-pro/hero_apple_vision_pro__e8407ehady6i_large.jpg)' }}>
      <div className="text-black">
        <h1 className="text-5xl md:text-7xl font-semibold">Apple Vision Pro</h1>
        <p className="text-xl mt-4">Welcome to the era of spatial computing.</p>
        <div className="mt-6 space-x-4">
          <a href="#" className="underline">Learn more</a>
          <a href="#" className="underline">Buy</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;