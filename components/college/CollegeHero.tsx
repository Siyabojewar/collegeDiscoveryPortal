import React from 'react';
import Image from 'next/image';
import { College } from '@/types/college';
import { Badge } from '@/components/ui/Badge';

interface CollegeHeroProps {
  college: College;
}

export function CollegeHero({ college }: CollegeHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-end">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={college.image}
          alt={college.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="success">{college.type}</Badge>
              <Badge variant="primary">{college.accreditation}</Badge>
              <Badge variant="warning">Est. {college.established}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {college.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-200 text-lg">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {college.location}, {college.state}
              </span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="flex items-center text-yellow-400 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {college.rating.toFixed(1)} / 5.0 Rating
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center shrink-0">
            <p className="text-gray-300 text-sm uppercase tracking-wider mb-1">NIRF Rank</p>
            <p className="text-4xl font-extrabold text-white">#{college.ranking}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
