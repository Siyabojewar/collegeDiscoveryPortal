import { College } from '@/types/college';
import { mockColleges } from '@/data/colleges';

export type MatchCategory = 'Ambitious' | 'Match' | 'Safe';

export interface PredictorInput {
  rank: number;
  exam: string;
  course: string;
  state: string;
}

export interface PredictorResult {
  college: College;
  matchType: MatchCategory;
  score: number;
}

export function generatePredictions(input: PredictorInput): PredictorResult[] {
  // Normalize user inputs
  const targetExam = input.exam.toLowerCase().trim();
  const targetCourse = input.course.toLowerCase().trim();
  const targetState = input.state.toLowerCase().trim();

  console.log("Running predictions with input:", input);
  console.log("MockColleges length at runtime:", mockColleges.length);

  // 1. Filter colleges that match mandatory criteria
  const eligibleColleges = mockColleges.filter(college => {
    // Check if the college accepts the chosen exam
    const matchesExam = college.exams.some(e => e.toLowerCase().trim() === targetExam);
    
    // Check course preference
    const matchesCourse = input.course === 'All Courses' || 
      college.courses.some(c => c.toLowerCase().trim() === targetCourse);
    
    // Check state preference
    const matchesState = input.state === 'All States' || 
      college.state.toLowerCase().trim() === targetState;
    
    console.log(`College: ${college.name}, Exams: ${college.exams}, matchesExam: ${matchesExam}, matchesCourse: ${matchesCourse}, matchesState: ${matchesState}`);
    
    return matchesExam && matchesCourse && matchesState;
  });

  // 2. Categorize based on user rank vs the actual historic cutoff rank
  const results: PredictorResult[] = [];

  for (const college of eligibleColleges) {
    const cutoff = college.cutoffRank;
    const userRank = input.rank;

    // Calculate how far the user rank is from the cutoff.
    // E.g. Cutoff = 2400. User = 150. Difference = 2250.
    // Percentage = (2250 / 2400) * 100 = +93% (Very Safe)
    const difference = cutoff - userRank;
    const offsetPercentage = (difference / cutoff) * 100;

    let matchType: MatchCategory;

    if (offsetPercentage >= 15) {
      matchType = 'Safe';
    } else if (offsetPercentage >= -20 && offsetPercentage < 15) {
      matchType = 'Match';
    } else if (offsetPercentage >= -60 && offsetPercentage < -20) {
      matchType = 'Ambitious';
    } else {
      // If the user's rank is completely out of bounds (e.g. rank 150000 for a 150 cutoff),
      // we do not return it to prevent unrealistic expectations.
      continue;
    }

    results.push({
      college,
      matchType,
      score: Math.round(offsetPercentage)
    });
  }

  console.log(`Final results length: ${results.length}`);

  // 3. Sort by how close they are to being a perfect match (score descending)
  return results.sort((a, b) => b.score - a.score);
}
