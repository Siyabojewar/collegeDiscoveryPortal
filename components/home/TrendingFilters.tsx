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
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          
          <div className="w-full md:w-auto">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Trending Courses
            </h3>
            <div className="flex flex-wrap gap-2">
              {topCourses.map(course => (
                <Link 
                  key={course}
                  href={`/colleges?course=${encodeURIComponent(course)}`}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-200"></div>

          <div className="w-full md:w-auto">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Top Exams
            </h3>
            <div className="flex flex-wrap gap-2">
              {topExams.map(exam => (
                <Link 
                  key={exam}
                  href={`/colleges?exam=${encodeURIComponent(exam)}`}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                >
                  {exam}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
