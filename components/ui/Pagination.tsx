"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate an array of page numbers to show
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-8">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3"
      >
        Previous
      </Button>
      
      <div className="hidden sm:flex items-center gap-1">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
              currentPage === page 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <span className="sm:hidden text-sm text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3"
      >
        Next
      </Button>
    </div>
  );
}
