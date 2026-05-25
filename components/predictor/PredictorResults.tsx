import React from 'react';
import { PredictorResult } from '@/utils/predictorLogic';
import { CollegeCard } from '@/components/college/CollegeCard';

interface PredictorResultsProps {
  results: PredictorResult[];
}

export function PredictorResults({ results }: PredictorResultsProps) {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto animate-fade-in-up">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">No Matches Found</h2>
        <p className="text-gray-500">
          We couldn't find any colleges matching your exact combination of Exam, Course, and State preferences. Try broadening your search criteria.
        </p>
      </div>
    );
  }

  // Group results
  const safe = results.filter(r => r.matchType === 'Safe');
  const match = results.filter(r => r.matchType === 'Match');
  const ambitious = results.filter(r => r.matchType === 'Ambitious');

  return (
    <div className="space-y-16 animate-fade-in-up">
      
      {/* Match Tier */}
      {match.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between border-b-2 border-green-500 pb-2">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 block"></span>
              Good Match
            </h3>
            <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
              {match.length} Colleges
            </span>
          </div>
          <p className="text-gray-500 mb-6">Your rank is perfectly aligned with the historical cutoffs for these institutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {match.map(r => <CollegeCard key={r.college.id} college={r.college} />)}
          </div>
        </section>
      )}

      {/* Safe Tier */}
      {safe.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between border-b-2 border-blue-500 pb-2">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-500 block"></span>
              Safe Bet
            </h3>
            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {safe.length} Colleges
            </span>
          </div>
          <p className="text-gray-500 mb-6">Your rank is significantly better than the required cutoffs. You have a very high chance of admission here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safe.map(r => <CollegeCard key={r.college.id} college={r.college} />)}
          </div>
        </section>
      )}

      {/* Ambitious Tier */}
      {ambitious.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between border-b-2 border-orange-500 pb-2">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-orange-500 block"></span>
              Ambitious Target
            </h3>
            <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              {ambitious.length} Colleges
            </span>
          </div>
          <p className="text-gray-500 mb-6">These colleges usually require a better rank, but admission is still possible in later counseling rounds or specific categories.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambitious.map(r => <CollegeCard key={r.college.id} college={r.college} />)}
          </div>
        </section>
      )}

    </div>
  );
}
