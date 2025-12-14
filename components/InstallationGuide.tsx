import React from 'react';
import { DownloadIcon, MenuIcon, PuzzleIcon, RefreshIcon, UserIcon, ShieldIcon } from './Icons';

const InstallationGuide: React.FC = () => {
    const steps = [
        {
            title: "Download",
            description: "Get the extension file and unzip it to a secure folder.",
            icon: <DownloadIcon className="w-5 h-5 text-cyan-400" />,
        },
        {
            title: "Extensions Menu",
            description: "Open Chrome, type chrome://extensions in the URL bar.",
            icon: <PuzzleIcon className="w-5 h-5 text-blue-400" />,
        },
        {
            title: "Developer Mode",
            description: "Toggle the 'Developer mode' switch in the top right.",
            icon: <MenuIcon className="w-5 h-5 text-purple-400" />,
        },
        {
            title: "Load Unpacked",
            description: "Click button and select your unzipped folder.",
            icon: <RefreshIcon className="w-5 h-5 text-pink-400" />,
        },
        {
            title: "Login Once",
            description: "Tap the extension icon and save your details.",
            icon: <UserIcon className="w-5 h-5 text-green-400" />,
        },
    ];

    return (
        <section id="install-guide" className="py-24 relative z-10 w-full max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient inline-block">
                    Easy Setup
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    Since this is a custom tool, it takes 30 seconds to install.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="glass-panel p-6 rounded-2xl hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                                {step.icon}
                            </div>
                            <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-body">
                                {index + 1}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-body">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Security Section */}
            <div id="security" className="mt-20 glass-panel rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent">
                <div className="bg-[#0b1026]/80 rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
                    <div className="flex-shrink-0">
                        <div className="bg-green-500/10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                            <ShieldIcon className="w-10 h-10 text-green-400" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-3">Privacy First Architecture</h3>
                        <p className="text-gray-400 leading-relaxed font-body">
                            This extension operates <span className="text-green-400 font-medium">entirely offline</span> within your browser.
                            Your username and password are saved to Chrome's <code className="bg-white/10 px-1 py-0.5 rounded text-sm">local.storage</code>
                            and are never transmitted to us or any third-party server.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationGuide;