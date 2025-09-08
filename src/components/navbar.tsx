import React, { useState } from 'react';
import logo from './assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-2 hover:border-b-2 hover:border-white transition ${isActive ? 'border-b-2 border-white' : ''}`;

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>

        {/* Divider Line */}
        <div className="hidden lg:block flex-grow border-t border-gray-600 mx-8 relative z-10"></div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex bg-white/10 backdrop-blur-lg px-12 py-6 space-x-12 uppercase tracking-widest text-white">
          <NavLink to="/" className={getLinkClassName}>
            <span className="font-bold">00</span>
            <span>Home</span>
          </NavLink>
          <NavLink to="/destination" className={getLinkClassName}>
            <span className="font-bold">01</span>
            <span>Destination</span>
          </NavLink>
          <NavLink to="/crew" className={getLinkClassName}>
            <span className="font-bold">02</span>
            <span>Crew</span>
          </NavLink>
          <NavLink to="/technology" className={getLinkClassName}>
            <span className="font-bold">03</span>
            <span>Technology</span>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden z-30" onClick={() => setIsMenuOpen(true)}>
          <img src={hamburgerIcon} alt="Open menu" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-lg z-30">
          <div className="absolute top-0 right-0 h-full w-2/3 bg-white/5 backdrop-blur-xl p-8">
            <button onClick={() => setIsMenuOpen(false)} className="float-right mb-20">
              <img src={closeIcon} alt="Close menu" />
            </button>
            <div className="mt-20 flex flex-col space-y-8 uppercase tracking-widest text-white">
              <NavLink to="/" className={getLinkClassName} onClick={() => setIsMenuOpen(false)}>
                <span className="font-bold">00</span>
                <span>Home</span>
              </NavLink>
              <NavLink to="/destination" className={getLinkClassName} onClick={() => setIsMenuOpen(false)}>
                <span className="font-bold">01</span>
                <span>Destination</span>
              </NavLink>
              <NavLink to="/crew" className={getLinkClassName} onClick={() => setIsMenuOpen(false)}>
                <span className="font-bold">02</span>
                <span>Crew</span>
              </NavLink>
              <NavLink to="/technology" className={getLinkClassName} onClick={() => setIsMenuOpen(false)}>
                <span className="font-bold">03</span>
                <span>Technology</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;