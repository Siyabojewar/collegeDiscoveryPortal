import React from 'react';
import Link from 'next/link';
import { COURSE_TYPES, EXAM_TYPES } from '@/data/constants';

export function TrendingFilters() {
  // Take top 6 courses and top 4 exams for the trending section
  const topCourses = COURSE_TYPES.slice(0, 6);
  const topExams = EXAM_TYPES.slice(0, 4);

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Trending Courses Box */}
          <div className="bg-gray-100 rounded-3xl border border-gray-200 shadow-sm p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Trending Courses</h3>
                  <p className="text-sm text-gray-500 mt-1">Most searched by students</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {topCourses.map(course => (
                  <Link 
                    key={course}
                    href={`/colleges?course=${encodeURIComponent(course)}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {course}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Top Exams Box */}
          <div className="bg-gray-100 rounded-3xl border border-gray-200 shadow-sm p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Top Exams</h3>
                  <p className="text-sm text-gray-500 mt-1">Accepting applications now</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {topExams.map(exam => (
                  <Link 
                    key={exam}
                    href={`/colleges?exam=${encodeURIComponent(exam)}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {exam}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
