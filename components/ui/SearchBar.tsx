"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/colleges?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/colleges');
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative flex items-center w-full max-w-2xl mx-auto bg-white rounded-full shadow-lg overflow-hidden transition-shadow focus-within:shadow-xl border border-gray-100"
    >
      <div className="flex items-center justify-center pl-6 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for colleges, exams, or courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-4 px-4 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 text-lg placeholder:text-gray-400"
      />
      <button 
        type="submit"
        className="m-1.5 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md flex items-center gap-2"
      >
        <span>Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
