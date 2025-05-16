export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <h1 className="text-5xl font-bold mb-6 animate-fade-in">Find Your Future Career 🚀</h1>
      <p className="text-lg mb-8">An AI-powered guide to help you discover your perfect path.</p>
      <a href="/quiz" className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
        Start Now
      </a>
    </div>
  );
}