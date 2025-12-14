import React from 'react';

interface BrowserWindowProps {
  color?: string; // Kept for compat, but we override
  className?: string;
  position?: 'center';
}

export const BrowserWindow: React.FC<BrowserWindowProps> = ({ className = "" }) => {
  return (
    <div className={`rounded-xl overflow-hidden bg-[#0F111A] border border-white/10 shadow-2xl ${className}`}>

      {/* Browser Toolbar */}
      <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 space-x-4">
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>

        {/* Fake URL Bar */}
        <div className="flex-1 max-w-lg mx-auto h-7 bg-[#0d1117] border border-white/5 rounded-md flex items-center justify-center text-xs text-gray-500 font-mono">
          <span className="text-green-500 mr-2">🔒</span> http://172.16.0.30:8090/
        </div>
      </div>

      {/* Browser Content */}
      <div className="p-8 md:p-12 bg-gradient-to-br from-[#0F111A] to-[#1a1f2e] min-h-[300px] flex flex-col items-center justify-center">

        {/* Mock Login Form */}
        <div className="w-full max-w-sm bg-[#161b22] border border-white/5 p-8 rounded-xl shadow-xl">
          <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
            <div className="w-6 h-6 rounded bg-blue-500"></div>
          </div>

          <div className="space-y-4">
            <div className="h-10 w-full bg-[#0d1117] border border-white/5 rounded-lg flex items-center px-3">
              <div className="w-20 h-2 bg-gray-700 rounded-full opacity-50"></div>
            </div>
            <div className="h-10 w-full bg-[#0d1117] border border-white/5 rounded-lg flex items-center px-3 justify-between">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="h-10 w-full bg-blue-600 rounded-lg shadow-lg shadow-blue-900/50 mt-4"></div>
          </div>
        </div>

      </div>
    </div>
  );
};