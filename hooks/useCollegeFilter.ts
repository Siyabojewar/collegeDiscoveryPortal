import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { mockColleges } from '@/data/colleges';
import { SortOption } from '@/types/college';

const ITEMS_PER_PAGE = 9;

export function useCollegeFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read URL Params
  const querySearch = searchParams.get('search') || '';
  const queryStates = searchParams.get('state')?.split(',') || [];
  const queryCourses = searchParams.get('course')?.split(',') || [];
  const queryExams = searchParams.get('exam')?.split(',') || [];
  const queryTypes = searchParams.get('type')?.split(',') || [];
  const queryMaxFees = searchParams.get('maxFees') ? parseInt(searchParams.get('maxFees') as string) : 3000000;
  const querySort = (searchParams.get('sort') as SortOption) || 'ranking_asc';
  const queryPage = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...mockColleges];

    // Search text
    if (querySearch) {
      const q = querySearch.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.location.toLowerCase().includes(q) ||
        c.courses.some(course => course.toLowerCase().includes(q))
      );
    }

    // State filter
    if (queryStates.length > 0) {
      result = result.filter(c => queryStates.includes(c.state));
    }

    // Course filter
    if (queryCourses.length > 0) {
      result = result.filter(c => c.courses.some(course => queryCourses.includes(course)));
    }

    // Exam filter
    if (queryExams.length > 0) {
      result = result.filter(c => c.exams.some(exam => queryExams.includes(exam)));
    }

    // Type filter
    if (queryTypes.length > 0) {
      result = result.filter(c => queryTypes.includes(c.type));
    }

    // Fees filter
    if (queryMaxFees < 3000000) {
      result = result.filter(c => c.fees <= queryMaxFees);
    }

    // Sorting Logic
    switch (querySort) {
      case 'rating_desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'fees_asc':
        result.sort((a, b) => a.fees - b.fees);
        break;
      case 'fees_desc':
        result.sort((a, b) => b.fees - a.fees);
        break;
      case 'package_desc':
        result.sort((a, b) => b.placements.highestPackage - a.placements.highestPackage);
        break;
      case 'ranking_asc':
      default:
        result.sort((a, b) => a.ranking - b.ranking);
        break;
    }

    return result;
  }, [querySearch, queryStates, queryCourses, queryExams, queryTypes, queryMaxFees, querySort]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredColleges.length / ITEMS_PER_PAGE);
  const paginatedColleges = useMemo(() => {
    const start = (queryPage - 1) * ITEMS_PER_PAGE;
    return filteredColleges.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredColleges, queryPage]);

  // URL Update Helpers
  const updateFilter = (key: string, value: string | string[] | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Always reset to page 1 when filtering changes
    if (key !== 'page') params.delete('page');

    if (value === null || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(','));
    } else {
      params.set(key, value);
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const toggleArrayFilter = (key: string, item: string) => {
    const current = searchParams.get(key)?.split(',') || [];
    const updated = current.includes(item) 
      ? current.filter(i => i !== item)
      : [...current, item];
    updateFilter(key, updated);
  };

  const applyFilters = (newFilters: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page'); // Reset to page 1

    if (newFilters.states?.length > 0) params.set('state', newFilters.states.join(',')); else params.delete('state');
    if (newFilters.courses?.length > 0) params.set('course', newFilters.courses.join(',')); else params.delete('course');
    if (newFilters.exams?.length > 0) params.set('exam', newFilters.exams.join(',')); else params.delete('exam');
    if (newFilters.types?.length > 0) params.set('type', newFilters.types.join(',')); else params.delete('type');
    
    if (newFilters.maxFees && newFilters.maxFees < 3000000) params.set('maxFees', newFilters.maxFees.toString()); 
    else params.delete('maxFees');

    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    // Data
    colleges: paginatedColleges,
    totalCount: filteredColleges.length,
    totalPages,
    
    // State
    filters: {
      search: querySearch,
      states: queryStates,
      courses: queryCourses,
      exams: queryExams,
      types: queryTypes,
      maxFees: queryMaxFees,
      sort: querySort,
      page: queryPage
    },
    
    // Actions
    updateFilter,
    toggleArrayFilter,
    applyFilters
  };
}
