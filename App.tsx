import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstallationGuide from './components/InstallationGuide';

const App: React.FC = () => {


  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white flex flex-col relative overflow-hidden">
      {/* Clean Background */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Hero />
          <InstallationGuide />
        </main>

        <footer className="py-8 bg-black/20 border-t border-white/10 mt-auto backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} LoggedIn.</p>
            <p className="mt-2">A Saathvik Manikandan Production</p>
          </div>
        </footer>
      </div >
    </div >
  );
};

export default App;
