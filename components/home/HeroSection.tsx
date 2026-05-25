import React from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-48 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">

        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Find Your Dream College <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
            Shape Your Future
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl font-light">
          Search, compare, and get AI-driven predictions to find the perfect educational institution for your career goals.
        </p>

        <div className="w-full mb-10">
          <SearchBar />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/colleges" variant="secondary" size="lg" className="border-none shadow-xl hover:bg-gray-100 font-bold">
            Browse All Colleges
          </Button>
          <Button href="/predictor" variant="outline" size="lg" className="border-blue-400 text-white hover:bg-blue-800/50 hover:text-white backdrop-blur-sm">
            Try Predictor Tool
          </Button>
        </div>
      </div>
    </section>
  );
}

