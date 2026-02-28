const scores = [8, 9, 7, 10, 8, 6, 5, 8, 9, 7];
const selectedScore = scores[3]; // Change this to test different scores

// Calculate the grade based on the selected score using the ternary operator

const grade = 

selectedScore >= 9 ? "A" : selectedScore >= 8 ? "B" : selectedScore >= 7 ? "C" : 
selectedScore >= 6 ? "D" : "F"; 

// Create a message based on the grade using the ternary operator

const message = 

grade === "A" ? "Excellent work! Keep it up!" : grade === "B" ? "Good job! You're doing well!" :
grade === "C" ?  "Satisfactory. There's room for improvement." : grade === "D" ? "You need to work harder. Consider getting help." 
   : "Failed. Please meet with your teacher for support.";

try {
  console.log(`Score: ${selectedScore}`);
  console.log(`Grade: ${grade}`);
  console.log(message);
} catch {
  console.log("Please follow the instructions carefully and try again");
}

let num = 10;

console.log(num%2===0? "even": "odd");
