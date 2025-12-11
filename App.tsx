import React, { useState } from 'react';
import Hero from './components/Hero';
import ImageUploader from './components/ImageUploader';
import PromptDisplay from './components/PromptDisplay';
import ResultViewer from './components/ResultViewer';
import { generateAlienWorkspace } from './services/geminiService';
import { AppState, DEFAULT_PROMPT } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  const [prompt, setPrompt] = useState<string>(DEFAULT_PROMPT);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleImageSelected = (base64: string, type: string) => {
    setSelectedImage(base64);
    setMimeType(type);
    setResultImage(null);
    setAppState(AppState.IDLE);
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setAppState(AppState.GENERATING);
    try {
      const generatedImage = await generateAlienWorkspace(selectedImage, mimeType, prompt);
      setResultImage(generatedImage);
      setAppState(AppState.SUCCESS);
    } catch (error) {
      console.error(error);
      setAppState(AppState.ERROR);
    }
  };

  return (
    <div className="min-h-screen bg-sci-dark text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="space-y-8 bg-sci-panel p-6 rounded-2xl border border-slate-700 shadow-xl">
            <ImageUploader 
              selectedImage={selectedImage} 
              onImageSelected={handleImageSelected} 
            />
            
            <PromptDisplay 
              prompt={prompt} 
              setPrompt={setPrompt} 
              disabled={appState === AppState.GENERATING}
            />

            <button
              onClick={handleGenerate}
              disabled={!selectedImage || appState === AppState.GENERATING}
              className={`
                w-full py-4 px-6 rounded-xl font-bold text-lg tracking-wide uppercase transition-all duration-300 shadow-lg
                ${!selectedImage 
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                  : appState === AppState.GENERATING
                    ? 'bg-slate-800 text-cyan-500 border border-cyan-500/50 cursor-wait'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1'
                }
              `}
            >
              {appState === AppState.GENERATING ? 'Processing Protocol...' : 'Initiate Transformation'}
            </button>
          </div>

          {/* Output Column */}
          <div className="space-y-6">
             <ResultViewer state={appState} resultImage={resultImage} />
             
             {/* Instructions / Flavor Text if Idle */}
             {appState === AppState.IDLE && !resultImage && (
               <div className="h-full flex flex-col items-center justify-center p-8 border border-slate-800 rounded-2xl text-slate-500 text-center border-dashed">
                 <div className="w-16 h-16 mb-4 opacity-30 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-xl"></div>
                 <h3 className="text-xl font-semibold mb-2 text-slate-400">Ready for Contact</h3>
                 <p className="max-w-xs">
                   Upload your office photo and click "Initiate Transformation" to welcome your new alien overlords.
                 </p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;