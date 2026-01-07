'use client';

import { useState } from 'react';

export default function Landing() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`relative h-[100dvh] w-full overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'
    }`}>
      {/* Theme toggle button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 z-20 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 font-medium"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Merry Christmas
        </h1>
        
        <p className="text-center text-xl md:text-2xl font-light text-white/90">
          Wishing you joy and happiness this holiday season
        </p>
      </main>
    </div>
  );
}



