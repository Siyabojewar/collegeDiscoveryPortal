"use client";

import React from 'react';
import { College } from '@/types/college';

interface ShareCollegeButtonProps {
  college: College;
}

export function ShareCollegeButton({ college }: ShareCollegeButtonProps) {
  const handleShare = async () => {
    const url = window.location.origin + `/colleges/${college.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: college.name,
          text: `Check out ${college.name} on College Discovery Portal!`,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share College
    </button>
  );
}
