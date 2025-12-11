import React from 'react';

interface PromptDisplayProps {
  prompt: string;
  setPrompt: (value: string) => void;
  disabled: boolean;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, setPrompt, disabled }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-purple-400 mb-2 uppercase tracking-wider">
        2. Mission Briefing (Prompt)
      </label>
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={disabled}
          className="w-full h-48 bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none disabled:opacity-50"
          placeholder="Describe the alien interaction..."
        />
        <div className="absolute bottom-3 right-3 text-xs text-slate-500">
          Portuguese (PT-BR) supported
        </div>
      </div>
    </div>
  );
};

export default PromptDisplay;