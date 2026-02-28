//flat() is an array method used to flatten nested arrays.

// It creates a new array by removing one or more levels of nesting.

let num = [
    1,
    [2, 3],
    4,
    5,
    6,
    [7, 8],
    9,
    [10, 11],
    12,
    13,
    [14, 15, 16, [17, [18], 19]]
];

console.log(num.flat());


// example: 2

const weeklyTasks = [
  ["Monday", ["Reply to emails", "Team meeting"]],
  ["Tuesday", ["Write report", "Client call"]],
  ["Wednesday", ["Code review", "Project planning"]],
];

// Use flat() to flatten the array to one level
const flatTasks = weeklyTasks.flat();

// Use flat(2) to flatten the array to two levels

const allTasks = weeklyTasks.flat(2);


  console.log("Original nested array:");
  console.log(weeklyTasks);
  console.log("\nFlattened array (one level):");
  console.log(flatTasks);
  console.log("\nCompletely flattened array:");
  console.log(allTasks);
