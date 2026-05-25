"use client";

import React from 'react';
import Link from 'next/link';
import { useCompare } from '@/hooks/useCompare';
import { Button } from '@/components/ui/Button';

export function CompareBar() {
  const { selectedColleges, removeCollege, clearCompare } = useCompare();

  if (selectedColleges.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 animate-slide-up">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="text-sm font-bold text-gray-700 whitespace-nowrap">
            Compare ({selectedColleges.length}/3)
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            {selectedColleges.map(college => (
              <div 
                key={college.id} 
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg shrink-0 max-w-[200px]"
              >
                <p className="text-xs font-semibold text-gray-800 truncate" title={college.name}>
                  {college.name}
                </p>
                <button 
                  onClick={() => removeCollege(college.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            {/* Empty Slots */}
            {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
              <div key={i} className="hidden md:flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 w-32 px-3 py-1.5 rounded-lg shrink-0">
                <p className="text-xs text-gray-400">Empty Slot</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button 
            onClick={clearCompare}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            Clear All
          </button>
          
          <Link href="/compare" className="w-full md:w-auto">
            <Button 
              variant="primary" 
              className="w-full shadow-lg"
              disabled={selectedColleges.length < 2}
            >
              {selectedColleges.length < 2 ? 'Select 1 more' : 'Compare Now'}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
