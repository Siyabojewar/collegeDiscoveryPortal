import React from 'react';
import { mockColleges } from '@/data/colleges';
import { CollegeCard } from '@/components/college/CollegeCard';
import { Button } from '@/components/ui/Button';

export function TopColleges() {
  // Sort colleges by ranking (ascending) and take the top 6
  const topColleges = [...mockColleges]
    .sort((a, b) => a.ranking - b.ranking)
    .slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Ranked Colleges
            </h2>
            <p className="text-lg text-gray-600">
              Discover the most prestigious institutions across India based on NIRF rankings and placement records.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/colleges" variant="secondary" className="flex items-center gap-2">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
