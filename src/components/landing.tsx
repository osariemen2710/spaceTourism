import React from 'react';
import './landing.css';
import Navbar from './navbar';

const SpaceTravelPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-home"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 "></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around min-h-screen px-8 pt-32">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left lg:ml-20">
          <h2 className="text-white text-lg font-light tracking-[0.3em] mb-6 uppercase">
            So, you want to travel to
          </h2>
          <h1 className="text-white text-8xl font-light tracking-wider mb-8 leading-none">
            SPACE
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-lg font-light">
            Let's face it; if you want to go to space, you might as well 
            genuinely go to outer space and not hover kind of on the 
            edge of it. Well sit back, and relax because we'll give you 
            a truly out of this world experience!
          </p>
        </div>

        {/* Right Content - Explore Button */}
        <div className="flex-1 flex justify-center items-center">
          <button className="group relative w-64 h-64 rounded-full bg-white text-black flex items-center justify-center text-xl font-light tracking-[0.2em] hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out">
            <span className="relative z-10">EXPLORE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceTravelPage;