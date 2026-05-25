import React from 'react';
import { College } from '@/types/college';
import { CollegeCard } from '@/components/college/CollegeCard';

interface CollegeGridProps {
  colleges: College[];
}

export function CollegeGrid({ colleges }: CollegeGridProps) {
  if (colleges.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No colleges found</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We couldn't find any colleges matching your exact filters. Try adjusting your search criteria, removing some filters, or increasing your fee budget.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
      {colleges.map((college) => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
}
