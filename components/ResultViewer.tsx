import React from 'react';
import { AppState } from '../types';

interface ResultViewerProps {
  state: AppState;
  resultImage: string | null;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ state, resultImage }) => {
  if (state === AppState.IDLE && !resultImage) return null;

  return (
    <div className="w-full animate-fade-in mt-8">
       <label className="block text-sm font-medium text-green-400 mb-2 uppercase tracking-wider">
        3. Simulation Output
      </label>
      
      <div className="relative bg-black rounded-xl overflow-hidden min-h-[400px] border border-slate-700 flex items-center justify-center">
        
        {state === AppState.GENERATING && (
          <div className="text-center p-8 space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 border-4 border-purple-500/50 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-cyan-400 font-mono text-lg animate-pulse">Establishing Neural Link...</p>
            <p className="text-slate-500 text-sm">Processing holographic data</p>
          </div>
        )}

        {state === AppState.SUCCESS && resultImage && (
          <div className="relative group w-full h-full">
            <img 
              src={resultImage} 
              alt="Alien Office Transformation" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
              <a 
                href={resultImage} 
                download="xenocorp_transformation.png"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Download Evidence
              </a>
            </div>
          </div>
        )}

        {state === AppState.ERROR && (
          <div className="text-center p-8 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <p>Connection Lost.</p>
            <p className="text-sm opacity-70">The alien signal was disrupted. Try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultViewer;