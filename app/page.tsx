import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrendingFilters } from '@/components/home/TrendingFilters';
import { TopColleges } from '@/components/home/TopColleges';
import { TopStudyPlaces } from '@/components/home/TopStudyPlaces';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <HeroSection />
      <TrendingFilters />
      <TopColleges />
      <TopStudyPlaces />
    </main>
  );
}
