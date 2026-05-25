"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { College } from '@/types/college';
import { mockColleges } from '@/data/colleges';

interface CompareContextType {
  selectedColleges: College[];
  addCollege: (id: string) => void;
  removeCollege: (id: string) => void;
  clearCompare: () => void;
  isCompareFull: boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Optional: Sync with LocalStorage for persistence across reloads
  useEffect(() => {
    const saved = localStorage.getItem('compare_queue');
    if (saved) {
      try {
        setSelectedIds(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('compare_queue', JSON.stringify(selectedIds));
  }, [selectedIds]);

  const addCollege = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const removeCollege = (id: string) => {
    setSelectedIds(prev => prev.filter(cId => cId !== id));
  };

  const clearCompare = () => {
    setSelectedIds([]);
  };

  // Hydrate full college objects
  const selectedColleges = selectedIds
    .map(id => mockColleges.find(c => c.id === id))
    .filter((c): c is College => c !== undefined);

  return (
    <CompareContext.Provider 
      value={{ 
        selectedColleges, 
        addCollege, 
        removeCollege, 
        clearCompare,
        isCompareFull: selectedIds.length >= 3
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
