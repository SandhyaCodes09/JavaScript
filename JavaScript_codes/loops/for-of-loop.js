// Student grades for different subjects
const studentGrades = {
  MATH: 85,
  SCIENCE: 92,
  HISTORY: 78,
  ENGLISH: 95,
  ART: 88,
};

// Initialize total grade
let totalGrade = 0;
let subjectCount = 0;

console.log("STUDENT REPORT CARD:");
console.log("-------------------");

// Using a for-of loop to calculate total and show each subject grade

for(const entry of Object.entries(studentGrades)){
  const subject = entry[0];

  const grade = entry[1];

  totalGrade += grade;

  subjectCount++;

  console.log(`${subject}: ${grade}/100`);
}

// Calculate and display average
const averageGrade = totalGrade / subjectCount;
console.log("-------------------");
console.log(`Average Grade: ${averageGrade.toFixed(1)}/100`);
