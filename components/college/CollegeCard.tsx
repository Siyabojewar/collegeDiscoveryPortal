"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { College } from '@/types/college';
import { Badge } from '@/components/ui/Badge';
import { formatLPA } from '@/utils/formatUtils';
import { useCompare } from '@/hooks/useCompare';

interface CollegeCardProps {
  college: College;
}

export function CollegeCard({ college }: CollegeCardProps) {
  const { selectedColleges, addCollege, removeCollege, isCompareFull } = useCompare();
  const isSelected = selectedColleges.some(c => c.id === college.id);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSelected) {
      removeCollege(college.id);
    } else if (!isCompareFull) {
      addCollege(college.id);
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div className="bg-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-in-up group h-full relative">
      {/* Compare Checkbox */}
      <div className="absolute top-3 left-3 z-20">
        <button
          onClick={toggleCompare}
          disabled={!isSelected && isCompareFull}
          className={`flex items-center justify-center w-8 h-8 rounded-full shadow-sm backdrop-blur-md transition-colors ${
            isSelected 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/80 text-gray-400 hover:bg-white hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
          title={isSelected ? "Remove from Compare" : "Add to Compare"}
        >
          {isSelected ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </button>
      </div>

      {/* Image / Header Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={college.image}
          alt={college.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge variant="primary" className="shadow-sm">
            {college.type}
          </Badge>
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm w-fit self-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {college.rating.toFixed(1)}
          </div>
        </div>
        
        {/* Share Button */}
        <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus-within:opacity-100 sm:opacity-100">
          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            title="Share College"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight">
            {college.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {college.location}, {college.state}
        </p>

        {/* Placements & Fees */}
        <div className="grid grid-cols-2 gap-4 mt-auto mb-5 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Highest Package</p>
            <p className="font-semibold text-green-700">{formatLPA(college.placements.highestPackage)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">NIRF Rank</p>
            <p className="font-semibold text-blue-700">#{college.ranking}</p>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href={`/colleges/${college.id}`}
          className="w-full block text-center py-2.5 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
