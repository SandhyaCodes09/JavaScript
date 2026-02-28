
// assending order
let arr = [1,4,3,7,9,12,0,11];

arr.sort();
console.log(arr);

// arr.sort((a,b)=>{
//     return a-b
// })

console.log(arr);

// desending order

let array = [1,4,3,7,9,12,0,11];

array.sort((a,b)=>{
    return b-a
})

console.log(array);


// example 3

const scores = [
  ["Math", 85],
  ["Science", 92],
  ["History", 78],
  ["English", 88],
];

// Sort scores array by subject name (alphanumeric)
const sortedBySubject = scores.slice().sort((a, b) => {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});

// Sort scores array by score value (ascending)

const sortedByScoreAsc = scores.slice().sort((a, b) => a[1] - b[1]);

// Sort scores array by score value (descending)

const sortedByScoreDesc = scores.slice().sort((a, b) => b[1] - a[1]);

  console.log("Original scores array:");
  console.log(scores);
  console.log("\nScores sorted by subject name:");
  console.log(sortedBySubject);
  console.log("\nScores sorted by score value (ascending):");
  console.log(sortedByScoreAsc);
  console.log("\nScores sorted by score value (descending):");
  console.log(sortedByScoreDesc);
