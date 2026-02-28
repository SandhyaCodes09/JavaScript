// > 85 = distinction
// > 70 = grade 1
// > 60 = grade 2
// > 50 = grade 3
// > 40 = grade 4
// else fail

// const percentage = 72;

// if (percentage >= 85){
//     console.log("distinction");
// } else if( percentage >= 70){
//     console.log("grade 1");
// } else if( percentage >= 60){
//     console.log("grade 2");
// } else if( percentage >= 50){
//     console.log("grade 3");
// } else if( percentage >= 40){
//     console.log("grade 4");
// } else {
//     console.log("Fail");
// }

// const grade = " grade 3";

// switch( grade){
//     case "Distinction":
//     console.log("Marks greater than or equal to 85");
//     break;
    
//     case "grade 1":
//     console.log("Marks greater than or equal to 70");
//     break;

//      case "grade 2":
//     console.log("Marks greater than or equal to 60");
//     break;
    
//     case "grade 4":
//     console.log("Marks greater than or equal to 50");
//     break;

//     default: 
//     console.log("Fail");

// }

const scores = [8, 9, 7, 10, 8, 6, 5, 8, 9, 7];
const selectedScore = scores[6];

// Implement the switch-case statement to print the grade based on the selected score.


let grade;

switch(selectedScore){
    case 10: 
    case 9:
        grade = "A";
        console.log(`Score: ${selectedScore}`);
        console.log(`Grade: ${grade}`);
        console.log("Excellent work!");
        break;

    case 8:
        grade = "B";
        console.log(`Score: ${selectedScore}`)
        console.log(`Grade: ${grade}`);
        console.log("Good job! You're doing well!");
        break;

    case 7:
        grade = "C";
        console.log(`Score: ${selectedScore}`);
        console.log(`Grade: ${grade}`);
        console.log("Satisfactory. There's room for improvement.");
        break;

    case 6:
        grade = "D";
        console.log(`Score: ${selectedScore}`);
        console.log(`Grade: ${grade}`);
        console.log("You need to work harder. Consider getting help.");
        break;

    default: 
        grade = "F"
        console.log(`Score: ${selectedScore}`);
        console.log(`Grade: ${grade}`);
        console.log("Failed. Please meet with your teacher for support.");

}
