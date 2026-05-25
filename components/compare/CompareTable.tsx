import React from 'react';
import { College } from '@/types/college';
import { formatCurrency, formatLPA } from '@/utils/formatUtils';
import Link from 'next/link';

interface CompareTableProps {
  colleges: College[];
}

export function CompareTable({ colleges }: CompareTableProps) {
  if (colleges.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
      <table className="w-full min-w-[800px] border-collapse bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-sm">
        
        {/* Table Header */}
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="p-4 text-left w-1/4 font-semibold text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            {colleges.map(college => (
              <th key={`header-${college.id}`} className="p-4 w-1/4 text-center align-top border-l border-gray-200">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm relative shrink-0 bg-blue-100">
                    {/* Using an img tag here for simplicity in table, next/image can sometimes conflict in flex-tables */}
                    <img src={college.image} alt={college.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight">
                    <Link href={`/colleges/${college.id}`} className="hover:text-blue-600 transition-colors">
                      {college.name}
                    </Link>
                  </h3>
                  <span className="text-xs font-normal text-gray-500">
                    {college.location}, {college.state}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">NIRF Ranking</td>
            {colleges.map(c => (
              <td key={`rank-${c.id}`} className="p-4 text-center border-l border-gray-200 font-extrabold text-blue-700 text-lg">
                #{c.ranking}
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Overall Rating</td>
            {colleges.map(c => (
              <td key={`rating-${c.id}`} className="p-4 text-center border-l border-gray-200 font-medium">
                <div className="flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {c.rating.toFixed(1)} / 5.0
                </div>
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Annual Fees</td>
            {colleges.map(c => (
              <td key={`fees-${c.id}`} className="p-4 text-center border-l border-gray-200 font-semibold text-gray-900">
                {formatCurrency(c.fees)}
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Highest Package</td>
            {colleges.map(c => (
              <td key={`highpkg-${c.id}`} className="p-4 text-center border-l border-gray-200 font-extrabold text-green-700">
                {formatLPA(c.placements.highestPackage)}
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Average Package</td>
            {colleges.map(c => (
              <td key={`avgpkg-${c.id}`} className="p-4 text-center border-l border-gray-200 font-semibold text-gray-900">
                {formatLPA(c.placements.averagePackage)}
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Placement Rate</td>
            {colleges.map(c => (
              <td key={`rate-${c.id}`} className="p-4 text-center border-l border-gray-200 font-medium">
                {c.placements.placementRate}%
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Institution Type</td>
            {colleges.map(c => (
              <td key={`type-${c.id}`} className="p-4 text-center border-l border-gray-200">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-bold">
                  {c.type}
                </span>
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50">Accreditation</td>
            {colleges.map(c => (
              <td key={`naac-${c.id}`} className="p-4 text-center border-l border-gray-200 font-medium">
                {c.accreditation}
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-4 font-bold text-gray-700 bg-gray-50 align-top">Popular Courses</td>
            {colleges.map(c => (
              <td key={`courses-${c.id}`} className="p-4 text-center border-l border-gray-200 align-top">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {c.courses.map(course => (
                    <span key={course} className="text-xs border border-gray-200 px-2 py-0.5 rounded text-gray-600">
                      {course}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>

        </tbody>
      </table>
    </div>
  );
}
