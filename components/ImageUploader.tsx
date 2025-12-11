import React, { useCallback } from 'react';

interface ImageUploaderProps {
  onImageSelected: (base64: string, mimeType: string) => void;
  selectedImage: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected, selectedImage }) => {
  
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Extract MIME type
        const mimeType = result.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)?.[0] || 'image/jpeg';
        onImageSelected(result, mimeType);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelected]);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wider">
        1. Upload Source Image
      </label>
      <div className="relative group">
        <div className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${selectedImage ? 'border-neon-blue bg-slate-900/50' : 'border-slate-600 hover:border-cyan-500 hover:bg-slate-800'}
        `}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          
          {selectedImage ? (
            <div className="relative h-64 w-full flex items-center justify-center overflow-hidden rounded-lg">
              <img 
                src={selectedImage} 
                alt="Uploaded preview" 
                className="max-h-full max-w-full object-contain shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Click to Change Image</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-8">
              <div className="mx-auto w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-slate-200">Drop your office selfie here</p>
                <p className="text-sm text-slate-400">or click to browse (JPG, PNG)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;