import React, { useState, useEffect } from 'react';
import { ChromeLogo } from './Icons';
import { APP_CONTENT } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav
        className={`
          flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300
          ${scrolled
            ? 'glass-panel w-full max-w-4xl bg-black/40'
            : 'w-full max-w-6xl bg-transparent border border-transparent'}
        `}
      >
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative p-1">
            <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full group-hover:bg-blue-400/30 transition-all"></div>
            <ChromeLogo className="w-8 h-8 relative z-10" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white group-hover:text-blue-200 transition-colors">
            {APP_CONTENT.header.logoText}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#install-guide" className="text-sm text-gray-300 hover:text-white transition-colors">How to Install</a>
          <a href="#security" className="text-sm text-gray-300 hover:text-white transition-colors">Security</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;