import React from 'react';
import { College } from '@/types/college';
import { formatCurrency } from '@/utils/formatUtils';

interface CollegeOverviewProps {
  college: College;
}

export function CollegeOverview({ college }: CollegeOverviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Overview & Details
      </h2>

      <div className="prose max-w-none text-gray-600 mb-8 leading-relaxed">
        <p>{college.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Fees Section */}
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Annual Fees Structure
          </h3>
          <p className="text-4xl font-extrabold text-gray-900">
            {formatCurrency(college.fees)}
            <span className="text-lg font-normal text-gray-500 ml-2">/ year</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Fees may vary based on specific course selection and category.</p>
        </div>

        {/* Courses Section */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Courses Offered
          </h3>
          <div className="flex flex-wrap gap-2">
            {college.courses.map(course => (
              <span key={course} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md text-sm font-medium shadow-sm">
                {course}
              </span>
            ))}
          </div>
          
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 mt-6 flex items-center gap-2">
            Exams Accepted
          </h3>
          <div className="flex flex-wrap gap-2">
            {college.exams.map(exam => (
              <span key={exam} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">
                {exam}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
