import { generatePredictions } from './utils/predictorLogic';

const input = {
  rank: 1,
  exam: 'JEE Advanced',
  course: 'All Courses',
  state: 'All States'
};

const results = generatePredictions(input);
console.log('Results length:', results.length);
if (results.length > 0) {
  console.log('Top match:', results[0].college.name, results[0].matchType, results[0].score);
} else {
  console.log('No matches found. Debugging...');
}
