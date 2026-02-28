// Math test scores for a class
const mathScores = [85, 92, 78, 95, 88, 76, 90, 84];

// Initialize total score
let totalScore = 0;

// Using a do-while loop to calculate total and show each score
let i = 0;

do {
    totalScore += mathScores[i];

    console.log(`Student ${i + 1} score: ${mathScores[i]}/100`);

    i++;
} while (i < mathScores.length);

// Calculate average
let averageGrade = totalScore / mathScores.length;

console.log("Average Score:", averageGrade);
