import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-sci-panel rounded-2xl p-8 mb-8 border border-slate-700 shadow-2xl">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-neon-blue opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-neon-purple opacity-20 blur-3xl rounded-full"></div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          XenoCorp Workspace
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Transform ordinary office photos into high-stakes, intergalactic business scenarios using Gemini AI.
        </p>
      </div>
    </div>
  );
};

export default Hero;