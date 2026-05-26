import { CollegeReview } from '@/types/college';
import { mockColleges } from './colleges';

const FIRST_NAMES = ["Amit", "Priya", "Rahul", "Sneha", "Vikram", "Anjali", "Rohan", "Kavita", "Suresh", "Neha", "Arjun", "Pooja", "Karan", "Riya", "Aditya"];
const LAST_NAMES = ["Sharma", "Patel", "Singh", "Kumar", "Gupta", "Verma", "Reddy", "Iyer", "Nair", "Das", "Joshi", "Chawla"];

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDate(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - Math.floor(Math.random() * 12));
  date.setDate(date.getDate() - Math.floor(Math.random() * 28));
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export const mockReviews: Record<string, CollegeReview[]> = {};

mockColleges.forEach((college) => {
  const reviews: CollegeReview[] = [];
  const numReviews = 3;
  
  for (let i = 0; i < numReviews; i++) {
    const isHighFee = college.fees >= 1000000;
    const isHighPlacement = college.placements.averagePackage >= 1500000;
    
    // Slight variance around the college's actual rating
    const ratingBase = college.rating - 0.4 + (Math.random() * 0.8);
    const finalRating = Math.min(5, Math.max(1, ratingBase));
    
    let content = `My experience at ${college.name} has been transformative. The campus environment is highly competitive which pushes you to do your best. `;
    let pros = "Experienced faculty, strong alumni network";
    let cons = "Highly demanding curriculum";
    
    if (isHighPlacement) {
      content += `The placement cell here is exceptional; most of my batch got placed with packages way above the industry average. `;
      pros += ", Stellar placements";
    } else {
      content += `Placements are decent but require a lot of self-preparation for top product-based companies. `;
      cons += ", Average placements for core branches";
    }
    
    if (isHighFee) {
      content += `While the fees are definitely on the higher end, the world-class infrastructure and exposure justify the ROI eventually. `;
      cons += ", Expensive tuition fees";
    } else {
      content += `The biggest advantage is the incredible ROI, given how affordable the tuition fees are here. `;
      pros += ", Excellent ROI and low fees";
    }

    reviews.push({
      id: `rev_${college.id}_${i}`,
      authorName: `${randomElement(FIRST_NAMES)} ${randomElement(LAST_NAMES)}`,
      rating: Number(finalRating.toFixed(1)),
      date: generateDate(),
      content,
      pros,
      cons
    });
  }
  
  mockReviews[college.id] = reviews;
});
