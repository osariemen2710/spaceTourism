import React, { useState } from 'react';
import './crew.css';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Navbar from './navbar';

import douglasPng from './assets/crew/image-douglas-hurley.png';
import anoushehPng from './assets/crew/image-anousheh-ansari.png';
import victorPng from './assets/crew/image-victor-glover.png';
import markPng from './assets/crew/image-mark-shuttleworth.png';

type CrewMember = {
  role: string;
  name: string;
  bio: string;
  image: string;
};

const CREW: CrewMember[] = [
  {
    role: 'Commander',
    name: 'Douglas Hurley',
    bio:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasPng,
  },
  {
    role: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    bio:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: markPng,
  },
  {
    role: 'Flight Engineer',
    name: 'Anousheh Ansari',
    bio:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anoushehPng,
  },
  {
    role: 'Pilot',
    name: 'Victor Glover',
    bio:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
    image: victorPng,
  },
];

const Crew: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + CREW.length) % CREW.length);
  const next = () => setIndex((i) => (i + 1) % CREW.length);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      <Navbar />
      <div className="absolute inset-0 bg-crew"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-12 lg:py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 tracking-widest">02</span>
            <h3 className="uppercase tracking-widest text-sm lg:text-base">Meet your crew</h3>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* left: text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="text-gray-400 uppercase tracking-widest text-sm">{CREW[index].role}</div>
              <h2 className="text-4xl lg:text-6xl font-light mt-2">{CREW[index].name}</h2>
            </div>
            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">{CREW[index].bio}</p>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
              {CREW.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full p-0 ${i === index ? 'bg-white' : 'bg-gray-500'} transition`}
                  aria-label={`Go to crew ${i}`}
                />
              ))}
            </div>
          </div>

          {/* right: image + arrows */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            <div className="relative">
              <img src={CREW[index].image} alt={CREW[index].name} className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain" />

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2  p-2 rounded-full hover:bg-white/20"
                aria-label="previous"
              >
                <IoChevronBackOutline className="text-gray w-6 h-6" />
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-transparent p-2 rounded-full hover:bg-white/20"
                aria-label="next"
              >
                <IoChevronForwardOutline className="text-gray w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
