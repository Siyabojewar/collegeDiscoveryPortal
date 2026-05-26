"use client";

import React, { Suspense } from 'react';
import { useCollegeFilter } from '@/hooks/useCollegeFilter';
import { FilterSidebar } from '@/components/filters/FilterSidebar';
import { FilterDrawer } from '@/components/filters/FilterDrawer';
import { SortDropdown } from '@/components/filters/SortDropdown';
import { CollegeGrid } from '@/components/college/CollegeGrid';
import { Pagination } from '@/components/ui/Pagination';
import { Badge } from '@/components/ui/Badge';
import { SortOption } from '@/types/college';

function CollegesContent() {
  const { 
    colleges, 
    totalCount, 
    totalPages, 
    filters, 
    updateFilter, 
    applyFilters 
  } = useCollegeFilter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-72 shrink-0 sticky top-24">
          <FilterSidebar 
            initialFilters={filters} 
            onApply={applyFilters} 
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0">
          
          <div className="relative p-6 sm:p-8 rounded-2xl shadow-lg mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[url('/assets/colleges-bg.png')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/75 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              <h1 className="text-3xl font-extrabold text-white">Explore Colleges</h1>
              <p className="text-blue-100 mt-2 flex items-center gap-2 text-base">
                Showing <Badge variant="neutral" className="!bg-white/20 !text-white border border-white/30">{totalCount}</Badge> results matching your criteria
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-3">
              <FilterDrawer 
                initialFilters={filters} 
                onApply={applyFilters} 
              />
              <SortDropdown 
                currentSort={filters.sort as SortOption} 
                onChange={(sort) => updateFilter('sort', sort)} 
              />
            </div>
          </div>

          {/* Active Search Term UI */}
          {filters.search && (
            <div className="mb-6 flex items-center gap-2 bg-blue-50 border border-blue-100 p-3 rounded-lg text-blue-800">
              <span className="text-sm font-medium">Search results for:</span>
              <Badge variant="primary">"{filters.search}"</Badge>
              <button 
                onClick={() => updateFilter('search', null)}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          <CollegeGrid colleges={colleges} />
          
          <Pagination 
            currentPage={filters.page} 
            totalPages={totalPages} 
            onPageChange={(page) => updateFilter('page', page.toString())} 
          />
          
        </div>
      </div>
    </div>
  );
}

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        <CollegesContent />
      </Suspense>
    </main>
  );
}
