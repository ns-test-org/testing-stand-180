export default function Landing() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Hello World
        </h1>
        
        <p className="text-center text-xl md:text-2xl font-light mt-6 text-white/90">
          Welcome to your new landing page
        </p>
      </main>
    </div>
  );
}


