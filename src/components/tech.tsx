import React, { useState } from 'react';
import './tech.css';
import Navbar from './navbar';

import vehiclePortrait from './assets/technology/image-launch-vehicle-portrait.jpg';
import vehicleLandscape from './assets/technology/image-launch-vehicle-landscape.jpg';
import capsulePortrait from './assets/technology/image-space-capsule-portrait.jpg';
import capsuleLandscape from './assets/technology/image-space-capsule-landscape.jpg';
import spaceportPortrait from './assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from './assets/technology/image-spaceport-landscape.jpg';

type TechItem = {
  title: string;
  subtitle: string;
  description: string;
  portrait: string;
  landscape: string;
};

const ITEMS: TechItem[] = [
  {
    title: 'Launch vehicle',
    subtitle: 'The terminology...',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    portrait: vehiclePortrait,
    landscape: vehicleLandscape,
  },
  {
    title: 'Spaceport',
    subtitle: 'The terminology...',
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    portrait: spaceportPortrait,
    landscape: spaceportLandscape,
  },
  {
    title: 'Space capsule',
    subtitle: 'The terminology...',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    portrait: capsulePortrait,
    landscape: capsuleLandscape,
  },
];

const Tech: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      <Navbar />
      <div className="absolute inset-0 bg-tech"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-12 lg:py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 tracking-widest">03</span>
            <h3 className="uppercase tracking-widest text-sm lg:text-base">Space launch 101</h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* left: controls + text */}
          <div className="flex-1 lg:max-w-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex flex-row justify-center lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6">
                {ITEMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-12 h-12 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border border-white/20 ${i === active ? 'bg-white text-black' : 'text-white/80'}`}
                    aria-label={`select ${i + 1}`}
                  >
                    <span className="font-medium">{i + 1}</span>
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <div className="text-gray-400 uppercase tracking-widest text-sm mb-2">{ITEMS[active].subtitle}</div>
                <h2 className="text-4xl lg:text-6xl font-light mb-4">{ITEMS[active].title}</h2>
                <p className="text-gray-300 leading-relaxed">{ITEMS[active].description}</p>
              </div>
            </div>
          </div>

          {/* right: image (portrait on lg, landscape on small) */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-[420px]">
              {/* portrait for large screens */}
              <img src={ITEMS[active].portrait} alt={ITEMS[active].title} className="hidden lg:block w-full object-cover rounded" />

              {/* landscape for small screens */}
              <img src={ITEMS[active].landscape} alt={ITEMS[active].title} className="block lg:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
