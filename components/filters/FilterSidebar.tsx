"use client";

import React, { useState, useEffect } from 'react';
import { INDIAN_STATES, COURSE_TYPES, EXAM_TYPES, COLLEGE_TYPES } from '@/data/constants';
import { formatCurrency } from '@/utils/formatUtils';

interface FilterSidebarProps {
  initialFilters: any; 
  onApply: (localFilters: any) => void;
  className?: string;
}

export function FilterSidebar({ initialFilters, onApply, className = '' }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState(initialFilters);

  // Sync with URL params if they change externally (e.g. hitting clear search)
  useEffect(() => {
    setLocalFilters(initialFilters);
  }, [initialFilters]);

  const handleToggleArray = (key: string, item: string) => {
    setLocalFilters((prev: any) => {
      const currentArray = prev[key] || [];
      const updatedArray = currentArray.includes(item)
        ? currentArray.filter((i: string) => i !== item)
        : [...currentArray, item];
      return { ...prev, [key]: updatedArray };
    });
  };

  const handleUpdateValue = (key: string, value: any) => {
    setLocalFilters((prev: any) => ({ ...prev, [key]: value }));
  };
  
  const SectionTitle = ({ title }: { title: string }) => (
    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">{title}</h4>
  );

  const CheckboxGroup = ({ title, filterKey, options, selected }: { title: string, filterKey: string, options: string[], selected: string[] }) => (
    <div className="mb-6">
      <SectionTitle title={title} />
      <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        {options.map(option => (
          <label key={option} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="checkbox" 
                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600 hover:border-blue-500 transition-colors"
                checked={selected.includes(option)}
                onChange={() => handleToggleArray(filterKey, option)}
              />
              <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm group-hover:text-gray-900">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <aside className={`w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </h3>
        {/* Reset Filters button could go here */}
      </div>

      <CheckboxGroup title="State" filterKey="states" options={INDIAN_STATES} selected={localFilters.states} />
      <hr className="my-6 border-gray-100" />
      
      <CheckboxGroup title="Course" filterKey="courses" options={COURSE_TYPES} selected={localFilters.courses} />
      <hr className="my-6 border-gray-100" />
      
      <CheckboxGroup title="Exam Accepted" filterKey="exams" options={EXAM_TYPES} selected={localFilters.exams} />
      <hr className="my-6 border-gray-100" />

      <CheckboxGroup title="College Type" filterKey="types" options={COLLEGE_TYPES} selected={localFilters.types} />
      <hr className="my-6 border-gray-100" />

      {/* Fees Slider */}
      <div className="mb-2">
        <SectionTitle title="Max Annual Fees" />
        <div className="px-2 mt-4">
          <input 
            type="range" 
            min="50000" 
            max="3000000" 
            step="50000"
            value={localFilters.maxFees}
            onChange={(e) => handleUpdateValue('maxFees', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
            <span>₹50K</span>
            <span className="text-blue-700 font-bold">{formatCurrency(localFilters.maxFees)}</span>
            <span>₹30L+</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button 
          onClick={() => onApply(localFilters)}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          Apply Filters
        </button>
      </div>

    </aside>
  );
}
