import React from 'react';
import './destination.css';
import marsPng from './assets/destination/image-mars.png';
import marsWebp from './assets/destination/image-mars.webp';
import Navbar from './navbar';

const Destination: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      <Navbar />
      {/* responsive background */}
      <div className="absolute inset-0 bg-destination"></div>

      {/* content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-12 lg:py-20">
        {/* header / nav row */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 tracking-widest">01</span>
            <h3 className="uppercase tracking-widest text-sm lg:text-base">Pick your destination</h3>
          </div>

          {/* simple tabs */}
          <ul className="hidden md:flex space-x-8 text-sm text-gray-300 uppercase tracking-widest">
            <li className="cursor-pointer hover:text-white">Moon</li>
            <li className="cursor-pointer border-b-2 border-white pb-2">Mars</li>
            <li className="cursor-pointer hover:text-white">Europa</li>
            <li className="cursor-pointer hover:text-white">Titan</li>
          </ul>
        </div>

        {/* main area: image left, text right on large screens */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
          {/* planet image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <picture>
              <source srcSet={marsWebp} type="image/webp" />
              <img src={marsPng} alt="Mars" className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain" />
            </picture>
          </div>

          {/* info panel */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl font-light tracking-wider mb-6">MARS</h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!
            </p>

            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6 text-sm text-gray-300">
                <div>
                  <div className="text-xs text-gray-400">Avg. Distance</div>
                  <div className="text-2xl text-white font-medium">225 mil. km</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Est. Travel Time</div>
                  <div className="text-2xl text-white font-medium">9 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Destination;
