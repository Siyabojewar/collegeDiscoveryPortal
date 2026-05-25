import React from 'react';
import { notFound } from 'next/navigation';
import { mockColleges } from '@/data/colleges';
import { CollegeHero } from '@/components/college/CollegeHero';
import { CollegeOverview } from '@/components/college/CollegeOverview';
import { PlacementStats } from '@/components/college/PlacementStats';
import { SimilarColleges } from '@/components/college/SimilarColleges';

interface CollegePageProps {
  params: {
    id: string;
  };
}

// Generate static params for all colleges so they are pre-rendered at build time
export function generateStaticParams() {
  return mockColleges.map((college) => ({
    id: college.id,
  }));
}

export default function CollegePage({ params }: CollegePageProps) {
  const college = mockColleges.find(c => c.id === params.id);

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-12 pt-16">
      <CollegeHero college={college} />
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CollegeOverview college={college} />
            <PlacementStats college={college} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Institution Type</p>
                    <p className="font-medium text-gray-900">{college.type}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Established</p>
                    <p className="font-medium text-gray-900">{college.established}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Accreditation</p>
                    <p className="font-medium text-gray-900">{college.accreditation}</p>
                  </div>
                </li>
              </ul>
              
              <button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <SimilarColleges currentCollege={college} />
      </div>
    </main>
  );
}
