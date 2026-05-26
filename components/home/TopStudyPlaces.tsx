"use client";

import React from 'react';
import Link from 'next/link';

const CITIES = [
  { name: 'Delhi NCR', query: 'state=Delhi', icon: 'M6 22V8a2 2 0 012-2h8a2 2 0 012 2v14M8 22v-8a4 4 0 018 0v8M4 6h16v2H4zM8 4h8v2H8z' }, // India Gate
  { name: 'Bangalore', query: 'search=Bangalore', icon: 'M12 4a3 3 0 00-3 3h6a3 3 0 00-3-3zM8 7H3v2h18V7h-5M5 9v13M9 9v13M15 9v13M19 9v13M2 22h20M12 4V2' }, // Vidhana Soudha
  { name: 'Hyderabad', query: 'search=Hyderabad', icon: 'M4 22V6l2-3 2 3v16M16 22V6l2-3 2 3v16M8 22v-6a4 4 0 018 0v6M6 10h12M6 14h12' }, // Charminar
  { name: 'Pune', query: 'search=Pune', icon: 'M3 22V10a2 2 0 014 0v12M17 22V10a2 2 0 014 0v12M7 22V12h10v10M10 22v-6a2 2 0 014 0v6M5 10h14M8 7h8v3H8zM10 7l1-3h2l1 3' }, // Shaniwar Wada
  { name: 'Mumbai', query: 'search=Mumbai', icon: 'M2 18h20M8 18V4l-5 14M8 4l4 14M16 18V4l-4 14M16 4l5 14' }, // Bandra-Worli Sea Link
  { name: 'Chennai', query: 'search=Chennai', icon: 'M10 12V4l2-2 2 2v8M12 7v1M4 22V14l3-2h10l3 2v8M10 22v-6h4v6M5 17h2M17 17h2' }, // Chennai Central
];

export function TopStudyPlaces() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-sans">
          Top Study Places
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CITIES.map((city) => (
            <Link 
              key={city.name}
              href={`/colleges?${city.query}`}
              className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={city.icon} />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-800 text-center">{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
