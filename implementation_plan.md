# College Discovery Platform — Implementation Plan

A full-featured frontend-only College Discovery Platform inspired by Careers360 and Collegedunia, built with **Next.js 14 (App Router) + React + TypeScript + TailwindCSS**.

---

## Tech Stack (Locked)

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | TailwindCSS v3 |
| State | React built-ins (`useState`, `useMemo`, `useEffect`) |
| Data | Local mock data (`.ts` files) |
| Deployment | Vercel |

> [!IMPORTANT]
> No external state libraries (Zustand, Redux, TanStack). No backend. No authentication. No external UI component libraries (ShadCN, MUI, etc.) unless TailwindCSS-compatible utilities are needed.

---

## Project Structure

```
college-discovery/
├── app/
│   ├── layout.tsx              # Root layout with Navbar + fonts
│   ├── page.tsx                # Homepage
│   ├── colleges/
│   │   ├── page.tsx            # College Listing + Search + Filter
│   │   └── [id]/
│   │       └── page.tsx        # College Detail Page
│   ├── compare/
│   │   └── page.tsx            # Compare Colleges
│   └── predictor/
│       └── page.tsx            # Predictor Tool
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── college/
│   │   ├── CollegeCard.tsx
│   │   ├── CollegeGrid.tsx
│   │   └── SimilarColleges.tsx
│   ├── filters/
│   │   ├── FilterSidebar.tsx
│   │   ├── FilterDrawer.tsx    # Mobile collapsible version
│   │   └── SortDropdown.tsx
│   ├── compare/
│   │   ├── CompareSelector.tsx
│   │   ├── CompareTable.tsx
│   │   └── CompareBar.tsx      # Sticky bottom bar showing selected
│   ├── predictor/
│   │   ├── PredictorForm.tsx
│   │   └── PredictorResults.tsx
│   ├── ui/
│   │   ├── SearchBar.tsx
│   │   ├── StatsCard.tsx
│   │   ├── CourseBadge.tsx
│   │   ├── EmptyState.tsx
│   │   ├── LoadingState.tsx
│   │   └── Pagination.tsx
│   └── home/
│       ├── HeroSection.tsx
│       ├── PopularCourses.tsx
│       └── TopColleges.tsx
│
├── data/
│   ├── colleges.ts             # 25 mock colleges
│   └── constants.ts            # Exam names, states, courses
│
├── types/
│   └── college.ts              # TypeScript type definitions
│
├── hooks/
│   ├── useCollegeFilter.ts     # Filter + sort logic
│   ├── useCompare.ts           # Compare selection logic
│   └── usePredictor.ts         # Predictor scoring logic
│
└── utils/
    ├── filterUtils.ts          # Pure filter functions
    └── formatUtils.ts          # Currency, number formatting
```

---

## Data Model

```ts
// types/college.ts

export type College = {
  id: string;
  name: string;
  location: string;
  state: string;
  type: "Government" | "Private" | "Deemed";
  fees: number;                       // Annual fees in INR
  rating: number;                     // 1.0 – 5.0
  courses: string[];                  // ["B.Tech", "MBA", "M.Tech"]
  placements: {
    averagePackage: number;           // LPA in INR
    highestPackage: number;
    placementRate: number;            // Percentage
  };
  exams: string[];                    // ["JEE Main", "CAT", "GATE"]
  cutoffRank: number;                 // General category rank
  reviews: number;                    // Total review count
  ranking: number;                    // NIRF or internal rank
  established: number;                // Year
  description: string;
  image: string;                      // URL or placeholder
  accreditation: string;              // "NAAC A++", "NBA"
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
  matchScore: number;           // 0–100
  eligible: boolean;
  reasons: string[];
};
```

---

## Phase-by-Phase Development Plan

---

### Phase 1 — Project Setup

**Goal**: Scaffold Next.js 14 project with TypeScript + TailwindCSS configured correctly.

#### Tasks
- Initialize with `npx create-next-app@latest` using App Router, TypeScript, TailwindCSS flags
- Configure `tailwind.config.ts` with custom color palette, fonts, and spacing
- Set up `globals.css` with base styles and CSS variables
- Install Google Fonts (Inter / Plus Jakarta Sans) via `next/font`
- Configure `tsconfig.json` for strict TypeScript with path aliases (`@/components`, `@/data`, `@/types`, `@/hooks`, `@/utils`)
- Create project folder structure
- Build `Navbar.tsx` and `Footer.tsx`
- Set up `app/layout.tsx` with root HTML structure

#### Deliverable
> Clean project that boots, shows a placeholder page, has Navbar working with all 4 route links.

---

### Phase 2 — Data Layer

**Goal**: Create all mock data and TypeScript types that every feature depends on.

#### Tasks
- Define `College` type in `types/college.ts` (full model as above)
- Define `FilterState`, `SortOption`, `PredictorInput`, `PredictorResult` types
- Create `data/colleges.ts` with **25 diverse mock colleges** covering:
  - Mix of Government / Private / Deemed
  - Multiple states (Maharashtra, Delhi, Karnataka, Tamil Nadu, Telangana, Gujarat, UP, West Bengal)
  - Multiple courses (B.Tech, MBA, MBBS, B.Arch, M.Tech, BBA, LLB)
  - Multiple exams (JEE Main, JEE Advanced, CAT, NEET, GATE, CLAT, XAT)
  - Varying fee ranges (₹50K – ₹25L/year)
  - Varying cutoff ranks (top 1000 to top 100000)
- Create `data/constants.ts` with static arrays for all filter dropdown values
- Create `utils/formatUtils.ts` for INR formatting, LPA display, rank display

#### Deliverable
> Typed mock data that can be imported anywhere. All colleges have complete data with no `undefined` fields.

---

### Phase 3 — Homepage

**Goal**: Landing page that communicates value and drives users to core features.

#### Sections

| Section | Description |
|---|---|
| `HeroSection` | Full-width gradient hero, headline, subheadline, main search bar, CTA buttons |
| `PopularCourses` | Horizontal scrollable course chips (B.Tech, MBA, MBBS, etc.) |
| `TopColleges` | Grid of top 6 colleges by rating, each as CollegeCard |
| Stats Bar | 3-4 numbers: "1000+ Colleges", "50+ Exams", "30+ States" |
| CTA Section | Explore Colleges / Compare / Try Predictor — card-style buttons |

#### Component Details
- `SearchBar.tsx`: controlled input, triggers navigation to `/colleges?search=query`
- `CollegeCard.tsx`: shows name, location, rating, fees, top courses, "View Details" + "Add to Compare" buttons
- Hero uses TailwindCSS gradient classes (no images needed for hero background)

#### Deliverable
> Professional, conversion-focused homepage. Not a portfolio splash screen.

---

### Phase 4 — College Listing Page (`/colleges`)

**Goal**: The most critical page. Searchable, filterable, sortable college grid.

#### Layout (Desktop)
```
[FilterSidebar (fixed left)] | [SearchBar + SortDropdown + CollegeGrid + Pagination]
```

#### Layout (Mobile)
```
[SearchBar] [Filter Button → opens FilterDrawer bottom sheet]
[SortDropdown]
[CollegeGrid — 1 column]
```

#### Filter Options
| Filter | Type | Values |
|---|---|---|
| State | Multi-checkbox | All Indian states present in data |
| Course | Multi-checkbox | B.Tech, MBA, MBBS, etc. |
| College Type | Radio | Government, Private, Deemed |
| Fees Range | Dual slider or min/max inputs | ₹0 – ₹25L |
| Rating | Star selector | ≥ 3.0, ≥ 3.5, ≥ 4.0, ≥ 4.5 |
| Entrance Exam | Multi-checkbox | JEE, CAT, NEET, etc. |

#### Sort Options
- Rating (High to Low)
- Fees (Low to High)
- Fees (High to Low)
- Avg. Package (High to Low)
- NIRF Ranking

#### State Architecture
All filter + sort state lives in `useCollegeFilter` custom hook:
```ts
// hooks/useCollegeFilter.ts
export function useCollegeFilter(colleges: College[]) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sort, setSort] = useState<SortOption>("rating_desc");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return applyFilters(colleges, filters);
  }, [colleges, filters]);

  const sorted = useMemo(() => {
    return applySort(filtered, sort);
  }, [filtered, sort]);

  const paginated = useMemo(() => {
    return paginate(sorted, page, PAGE_SIZE);
  }, [sorted, page]);

  return { filters, setFilters, sort, setSort, page, setPage, paginated, total: sorted.length };
}
```

#### Edge Cases
- No results → `EmptyState` with "Clear Filters" button
- Active filter count badge on Filter button (mobile)
- URL sync for search query (so links are shareable)

#### Deliverable
> Fully functional college listing with working search, all filters, all sorts, and pagination. Responsive across all breakpoints.

---

### Phase 5 — College Detail Page (`/colleges/[id]`)

**Goal**: Full profile page for a single college.

#### Sections

| Section | Component |
|---|---|
| Header | Name, location, type badge, rating, accreditation, quick stats |
| Tab Navigation | Overview / Courses & Fees / Placements / Exams / Reviews |
| Overview | Description, established year, ranking |
| Courses & Fees | Table: Course → Duration → Annual Fees |
| Placements | Average LPA, Highest LPA, Placement Rate — with visual bars |
| Exams Accepted | Chips for each exam, cutoff rank displayed |
| Reviews Summary | Star distribution + total review count |
| Similar Colleges | 3 cards: same state or same courses |
| Compare CTA | Sticky "Add to Compare" button |

#### Routing
- Uses `params.id` from URL
- `generateStaticParams` or simple client-side lookup from data

#### Deliverable
> A page that genuinely feels like a mini Collegedunia profile. Not a stretched card.

---

### Phase 6 — Compare Page (`/compare`)

**Goal**: Side-by-side comparison of 2–3 colleges.

#### State Architecture
`useCompare` custom hook manages selection globally (shared between CollegeCard and Compare page):
```ts
// hooks/useCompare.ts
export function useCompare() {
  const [selected, setSelected] = useState<string[]>([]); // college IDs
  
  const add = (id: string) => { /* max 3, no duplicates */ };
  const remove = (id: string) => { /* remove from array */ };
  const clear = () => setSelected([]);
  
  return { selected, add, remove, clear };
}
```

> [!IMPORTANT]
> Since `useCompare` state needs to be shared between CollegeCard (on listing page) and Compare page, we will lift state to a React Context placed in `app/layout.tsx`. This is the only context used in the project.

#### CompareBar (Sticky)
- Appears at the bottom when ≥1 college is selected
- Shows selected college names with remove (×) buttons
- "Compare Now" button navigates to `/compare`

#### CompareTable Layout

| Feature | IIT Bombay | IIT Delhi | NIT Trichy |
|---|---|---|---|
| Location | Mumbai, MH | Delhi | Trichy, TN |
| Type | Government | Government | Government |
| Annual Fees | ₹2.2L | ₹2.1L | ₹1.8L |
| Rating | 4.8 | 4.7 | 4.5 |
| Avg. Package | ₹18 LPA | ₹17 LPA | ₹12 LPA |
| Highest Package | ₹1.2 Cr | ₹1.5 Cr | ₹65 LPA |
| Accepted Exams | JEE Advanced | JEE Advanced | JEE Main |
| Courses | B.Tech, M.Tech | B.Tech, M.Tech | B.Tech |
| NIRF Rank | #1 | #2 | #9 |

- Best value in each row highlighted in green
- Worst value highlighted subtly
- Mobile: horizontal scroll table

#### Edge Cases
- `< 2` selected → show prompt "Select at least 2 colleges to compare"
- Duplicate selection prevention
- "Add More" button links back to `/colleges`

#### Deliverable
> Functional, visually clear comparison table with value highlighting and responsive layout.

---

### Phase 7 — Predictor Tool (`/predictor`)

**Goal**: Input-driven college recommendation engine using local data logic.

#### Form Inputs
| Field | Type | Options |
|---|---|---|
| Exam | Dropdown | JEE Main, JEE Advanced, CAT, NEET, GATE, CLAT, XAT |
| Your Rank | Number input | 1 – 500000 |
| Preferred State | Dropdown | All states + "Any" |
| Course | Dropdown | B.Tech, MBA, MBBS, etc. |

#### Scoring Algorithm (`hooks/usePredictor.ts`)

```ts
function scoreCollege(college: College, input: PredictorInput): PredictorResult {
  const reasons: string[] = [];
  let score = 0;

  // Exam match (required)
  if (!college.exams.includes(input.exam)) {
    return { college, matchScore: 0, eligible: false, reasons: ["Exam not accepted"] };
  }
  score += 40;
  reasons.push("Accepts your entrance exam");

  // Rank eligibility
  if (input.rank <= college.cutoffRank) {
    score += 40;
    reasons.push("Your rank is within expected cutoff");
  } else {
    score -= 20; // can still appear but marked as "Reach"
  }

  // Course match
  if (college.courses.includes(input.course)) {
    score += 15;
    reasons.push("Offers your preferred course");
  }

  // State preference
  if (input.state === "Any" || college.state === input.state) {
    score += 5;
    reasons.push("Located in preferred state");
  }

  return {
    college,
    matchScore: Math.max(0, Math.min(100, score)),
    eligible: input.rank <= college.cutoffRank,
    reasons,
  };
}
```

#### Results Display
- **Eligible colleges**: sorted by matchScore desc — shown with green "High Match" badge
- **Reach colleges**: rank slightly above cutoff — shown with amber "Reach" badge
- Each result card shows: Match %, Reasons list, College name, cutoff rank, link to detail page
- `EmptyState` if no exam match found

#### Edge Cases
- Rank = 0 or negative → validation error
- Rank > 500000 → "Please enter a valid rank"
- No matches at all → EmptyState with suggestion to try different exam/state

#### Deliverable
> Working predictor that produces meaningful, reasoned output from mock data.

---

### Phase 8 — Reusable Components Audit

**Goal**: Ensure all components are clean, typed, and reusable.

#### Component Checklist

| Component | Props | Used In |
|---|---|---|
| `CollegeCard` | `college: College`, `onCompare`, `compareSelected` | Listing, Homepage, Similar |
| `SearchBar` | `value`, `onChange`, `onSubmit`, `placeholder` | Homepage, Listing |
| `FilterSidebar` | `filters`, `onChange`, `onReset` | Listing (desktop) |
| `FilterDrawer` | Same as FilterSidebar + `isOpen`, `onClose` | Listing (mobile) |
| `SortDropdown` | `value`, `onChange`, `options` | Listing |
| `CompareTable` | `colleges: College[]` | Compare page |
| `CompareBar` | `selected: College[]`, `onRemove`, `onClear` | Global (layout) |
| `CompareSelector` | `colleges`, `selected`, `onAdd` | Compare page "Add More" |
| `StatsCard` | `label`, `value`, `icon` | Homepage, Detail |
| `CourseBadge` | `course: string` | Card, Detail |
| `EmptyState` | `title`, `message`, `actionLabel`, `onAction` | All pages |
| `LoadingState` | `message?` | All pages |
| `Pagination` | `page`, `total`, `pageSize`, `onChange` | Listing |
| `PredictorForm` | `onSubmit` | Predictor |
| `PredictorResults` | `results: PredictorResult[]` | Predictor |

---

### Phase 9 — Responsive Design Pass

**Goal**: Every page works perfectly on mobile, tablet, and desktop.

#### Breakpoint Strategy (TailwindCSS)

| Breakpoint | Prefix | Target |
|---|---|---|
| < 640px | (default) | Mobile — single column, drawer filters |
| 640–1024px | `sm:` / `md:` | Tablet — 2-col cards, collapsed sidebar |
| 1024px+ | `lg:` / `xl:` | Desktop — sidebar + 3-col grid |

#### Per-Page Responsive Notes

- **Homepage**: Hero stacks vertically on mobile; course chips scroll horizontally
- **Listing**: Sidebar hidden on mobile → replaced by bottom drawer triggered by "Filters" button
- **Detail**: Tab bar scrolls horizontally on mobile; stats in 2×2 grid
- **Compare**: Table scrolls horizontally; sticky header for first column (college names)
- **Predictor**: Form stacks vertically; results in single column

---

### Phase 10 — Edge Cases + Polish

**Goal**: Make the app production-quality with no broken states.

#### Edge Cases to Handle

| Scenario | Handling |
|---|---|
| 0 search results | `EmptyState` with "Clear Filters" CTA |
| < 2 colleges in compare | Warning message + prompt to add more |
| Duplicate compare selection | Prevent add, show toast-style message |
| Rank out of valid range | Inline form validation error |
| No predictor results | `EmptyState` with exam-change suggestion |
| Very long college names | Truncate with `text-ellipsis` + full name on hover |
| Missing image | Default placeholder via `next/image` fallback |
| Fees = 0 | Display "Not Available" |

#### Polish Items
- Smooth page transitions
- Hover animations on cards (subtle scale/shadow)
- Active filter chips above college grid (click to remove)
- "Back to top" button on long listing page
- Skeleton loading states for college cards

---

### Phase 11 — Deployment

**Goal**: Live on Vercel with clean URL.

#### Steps
1. Push to GitHub repository
2. Connect repo to Vercel
3. Deploy (zero config for Next.js on Vercel)
4. Set custom project name: `college-discovery`
5. Verify all 4 routes work: `/`, `/colleges`, `/compare`, `/predictor`
6. Test on mobile via live URL

---

## Build Order (7-Day Plan)

| Day | Work |
|---|---|
| **Day 1** | Phase 1 (Setup) + Phase 2 (Data layer) + Phase 3 (Homepage) |
| **Day 2** | Phase 4 — College Listing: layout + CollegeCard + SearchBar |
| **Day 3** | Phase 4 continued — FilterSidebar + SortDropdown + Pagination |
| **Day 4** | Phase 5 — College Detail Page (all sections) |
| **Day 5** | Phase 6 — Compare Page + CompareBar context |
| **Day 6** | Phase 7 — Predictor Tool |
| **Day 7** | Phase 8–11 — Responsive pass + edge cases + polish + deploy |

---

## Open Questions

> [!IMPORTANT]
> **Q1: Compare State Persistence** — Should the compare selection persist across page navigation (React Context in layout) or reset when the user navigates away? Recommended: Context in layout so the sticky CompareBar works globally.

> [!IMPORTANT]
> **Q2: URL-based Filter State** — Should filters sync to URL query params (e.g., `/colleges?state=Maharashtra&course=B.Tech`) for shareability? This adds complexity but is a strong UX point for the evaluation. Recommended: Yes, use `useSearchParams` from Next.js.

> [!NOTE]
> **Q3: College Images** — Use AI-generated images for college hero images, or colored gradient placeholders? Recommended: Gradient placeholders with college initials for speed; real images slow down development.

> [!NOTE]
> **Q4: Animation Library** — Plain TailwindCSS `transition` utilities are sufficient. No Framer Motion or GSAP needed per the tech stack constraint.

---

## Verification Plan

### Per-Feature Checks
- [ ] Homepage: All 3 CTA buttons navigate correctly
- [ ] Listing: Search, all filter types, all sort options work independently and in combination
- [ ] Listing: Pagination works and resets on filter change
- [ ] Detail: All tabs render correct data, "Add to Compare" works
- [ ] Compare: Max 3 colleges enforced, table renders correctly, value highlighting works
- [ ] Predictor: Valid + invalid rank inputs handled, results sorted by match score

### Responsive Checks
- [ ] Mobile (375px): All pages usable, no horizontal overflow
- [ ] Tablet (768px): 2-col card grid, filter accessible
- [ ] Desktop (1280px): Sidebar visible, 3-col grid

### TypeScript Checks
- [ ] `npm run build` passes with 0 type errors
- [ ] No `any` types used
