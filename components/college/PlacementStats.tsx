import React from 'react';
import { College } from '@/types/college';
import { formatLPA } from '@/utils/formatUtils';

interface PlacementStatsProps {
  college: College;
}

export function PlacementStats({ college }: PlacementStatsProps) {
  const { averagePackage, highestPackage, placementRate } = college.placements;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        Placement Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Highest Package */}
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl border border-green-200 flex flex-col justify-center">
          <p className="text-sm font-bold text-green-800 uppercase tracking-wider mb-2">Highest Package</p>
          <p className="text-4xl md:text-5xl font-black text-green-700">{formatLPA(highestPackage)}</p>
          <p className="text-sm text-green-600 mt-2 font-medium">Domestic & International</p>
        </div>

        {/* Average Package */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Average Package</p>
          <p className="text-3xl font-extrabold text-gray-900">{formatLPA(averagePackage)}</p>
          <p className="text-sm text-gray-500 mt-2">Across all engineering branches</p>
        </div>

        {/* Placement Rate */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center relative overflow-hidden">
          <p className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-2 relative z-10">Placement Rate</p>
          <p className="text-4xl font-black text-blue-700 relative z-10">{placementRate}%</p>
          
          {/* Visual Progress Background */}
          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-blue-200">
            <div 
              className="h-full bg-blue-600 rounded-r-full" 
              style={{ width: `${placementRate}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
