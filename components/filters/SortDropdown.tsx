"use client";

import React from 'react';
import { SortOption } from '@/types/college';

interface SortDropdownProps {
  currentSort: SortOption;
  onChange: (sort: SortOption) => void;
}

export function SortDropdown({ currentSort, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort" className="text-sm text-gray-600 font-medium whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="sort"
        value={currentSort}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="form-select bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 pl-3 pr-10 hover:border-gray-400 transition-colors shadow-sm outline-none"
      >
        <option value="ranking_asc">Top Ranked (NIRF)</option>
        <option value="package_desc">Highest Package</option>
        <option value="rating_desc">Highest Rating</option>
        <option value="fees_asc">Lowest Fees</option>
        <option value="fees_desc">Highest Fees</option>
      </select>
    </div>
  );
}
