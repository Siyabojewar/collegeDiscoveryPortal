"use client";

import React from 'react';
import { useCompare } from '@/hooks/useCompare';
import { CompareTable } from '@/components/compare/CompareTable';
import { Button } from '@/components/ui/Button';

export default function ComparePage() {
  const { selectedColleges } = useCompare();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-32">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">College Comparison</h1>
          <p className="text-gray-500">
            Compare up to 3 colleges side-by-side to make the best decision for your future.
          </p>
        </div>

        {selectedColleges.length < 2 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto mt-12">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Select more colleges to compare
            </h2>
            <p className="text-gray-500 mb-8">
              You need at least 2 colleges selected to view a side-by-side comparison. Currently, you have {selectedColleges.length} college(s) selected.
            </p>
            <Button href="/colleges" variant="primary" size="lg">
              Browse Colleges
            </Button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <CompareTable colleges={selectedColleges} />
          </div>
        )}
      </div>
    </div>
  );
}
