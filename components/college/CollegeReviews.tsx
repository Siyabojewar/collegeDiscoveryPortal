import React from 'react';
import { mockReviews } from '@/data/reviews';

interface CollegeReviewsProps {
  collegeId: string;
}

export function CollegeReviews({ collegeId }: CollegeReviewsProps) {
  const reviews = mockReviews[collegeId] || [];

  if (reviews.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shrink-0">
                  {review.authorName.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.authorName}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-100 shrink-0 w-fit">
                <span className="font-bold text-yellow-700 mr-1.5">{review.rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <p className="text-gray-700 mb-5 leading-relaxed">{review.content}</p>
            
            <div className="bg-gray-50 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-100">
              <div>
                <p className="text-xs font-bold text-green-700 uppercase mb-1.5 flex items-center tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </p>
                <p className="text-sm text-gray-600">{review.pros}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-red-700 uppercase mb-1.5 flex items-center tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </p>
                <p className="text-sm text-gray-600">{review.cons}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
