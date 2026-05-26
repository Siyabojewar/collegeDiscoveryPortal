export type College = {
  id: string;
  name: string;
  location: string;
  state: string;
  type: "Government" | "Private" | "Deemed";
  fees: number;
  rating: number;
  courses: string[];
  placements: {
    averagePackage: number;
    highestPackage: number;
    placementRate: number;
  };
  exams: string[];
  cutoffRank: number;
  reviews: number;
  ranking: number;
  established: number;
  description: string;
  image: string;
  accreditation: string;
};

export type CollegeReview = {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  content: string;
  pros: string;
  cons: string;
};

export type FilterState = {
  search: string;
  state: string[];
  courses: string[];
  feesMin: number;
  feesMax: number;
  rating: number;
  exams: string[];
  type: string[];
};

export type SortOption =
  | "rating_desc"
  | "fees_asc"
  | "fees_desc"
  | "package_desc"
  | "ranking_asc";

export type PredictorInput = {
  exam: string;
  rank: number;
  state: string;
  course: string;
};

export type PredictorResult = {
  college: College;
  matchScore: number;
  eligible: boolean;
  reasons: string[];
};
