import React from 'react';
import { College } from '@/types/college';
import { mockColleges } from '@/data/colleges';
import { CollegeCard } from '@/components/college/CollegeCard';

interface SimilarCollegesProps {
  currentCollege: College;
}

export function SimilarColleges({ currentCollege }: SimilarCollegesProps) {
  // Find similar colleges: 
  // 1. Not the current college
  // 2. Either same state OR same type
  // 3. Sort by ranking difference (closest ranking first)
  const similar = mockColleges
    .filter(c => c.id !== currentCollege.id)
    .filter(c => c.state === currentCollege.state || c.type === currentCollege.type)
    .sort((a, b) => Math.abs(a.ranking - currentCollege.ranking) - Math.abs(b.ranking - currentCollege.ranking))
    .slice(0, 3); // Take top 3

  if (similar.length === 0) return null;

  return (
    <section className="mt-12 mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        Similar Colleges You May Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similar.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
}
