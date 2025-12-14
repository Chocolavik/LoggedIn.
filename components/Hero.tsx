import React, { useState } from 'react';
import { DownloadIcon, ExternalLinkIcon } from './Icons';
import { APP_CONTENT } from '../constants';
import { BrowserWindow } from './BrowserWindow';

const Hero: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => setDownloadStarted(false), 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">

      {/* Main Content */}
      <div className="max-w-5xl px-6 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
          <span className="flex w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">v1.0 Now Available</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          <span className="text-gradient">Automate your</span><br />
          <span className="text-white">Campus Login</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed font-body">
          {APP_CONTENT.hero.description} No more typing passwords every single day. Secure, fast, and stays locally on your device.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
            <a
              href={`/${APP_CONTENT.hero.fileName}`}
              download
              onClick={handleDownload}
              className={`
                relative flex items-center justify-center gap-3 px-8 py-4
                bg-[#0b1026] text-white border border-blue-500/30
                text-lg font-semibold rounded-lg transition-all duration-200 
                hover:bg-[#151b36]
                ${downloadStarted ? 'cursor-wait' : ''}
              `}
            >
              {downloadStarted ? (
                <span className="animate-pulse">Downloading...</span>
              ) : (
                <>
                  <DownloadIcon className="w-5 h-5 text-blue-400" />
                  <span>{APP_CONTENT.hero.buttonText}</span>
                </>
              )}
            </a>
          </div>

          <a href="#install-guide" className="px-8 py-4 rounded-lg glass-button text-gray-300 hover:text-white font-medium flex items-center gap-2">
            View Instructions
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Visual Preview */}
        <div className="w-full max-w-4xl perspective-1000 animate-float-slow">
          <div className="relative group">
            {/* Glow behind window */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

            <BrowserWindow
              color="dark"
              className="glass-panel border-gray-700/50 relative transform rotate-x-12 transition-transform duration-500 group-hover:scale-[1.01]"
              position="center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;