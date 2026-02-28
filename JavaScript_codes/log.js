// if (true) {
//   let blockLet = "I am inside block";
//   const blockConst = "Me too inside block";
//   console.log(blockLet);
//   console.log(blockConst);class
// }


//   if (true) {
//   var blockVar = "var can go outside block";
// }
// console.log(blockVar);

// const user = {
//   name: "Sandhya",
//   role: "Student"
// };

// console.log("User before:", user);

// user.role = "Developer";
// console.log("User after:", user);

// user.name = "Saurabh";
// console.log("User after:", user);

// const numbers = [1, 2, 3];
// numbers.push(4); // ✅ allowed
// console.log("Numbers:", numbers);

function greet (name, callback){
          callback(name);
}

function sayHello(userName){
      console.log("Hello, " + userName + "!");
      }
greet("Rahul", sayHello);

// ===================================================

const addNumber = (a,b)=>{
      return (a+b);
}

console.log(addNumber(2,3));
//====================================
function addNumbers(a,b){
      return (a+b);
}
let result = addNumbers(5, 3);
console.log(result);  //8

//========================================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log(getDayName(1));  //Monday
console.log(getDayName(5));  // Friday
console.log(getDayName(9));  // Invalid day number

//==================================================

// function checkEligibility (age){
//      if(age>18){
//            return "Eligible";
//                 }else{
//                       return "Not Eligible";
//                   }
//            }

// let result = checkEligibility(20);
// console.log(result);

let numbers = [1, 2, 3, 4, 5];
let i = 0;


while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

//==============================

function checkEligibility(age) {
    return age >= 18 ? "Eligible" : "Not Eligible";
}

console.log(checkEligibility(20));  // Eligible
console.log(checkEligibility(16));  // Not Eligible


//====================================================

// let student = {
//          Name: “Rahul”,
//          Age: 21,
//          courses:[“Math”, “Physics”, “Chemistry”]
// };

// console.log(studeny);

// 1. Add a new property grade with the value "A". 

// student.grade = "A";
// console.log (student);

// // 2. Update the age to 22. 

// student.age = 22;
// console.log (student);

// // 3. Delete the courses property. 

// delete student.courses;
// console.log (student);

//===============================

// fruits[fruits.length] = "date";

const fruits = ["apple", "banana", "cherry"];

console.log (fruits.length);

//2. Add "date" to the end of the array using the length property

fruits[fruits.length] = "date";

console.log(fruits);

//========================================

let text = " Hello World! ";

//1. Trim the whitespace.

let trimmedText = text.trim();
console.log(trimmedText); // Hello World!

//2. Convert to uppercase.

let upperText = trimmedText.toUpperCase();
console.log(upperText); //HELLO WORLD!

// 3. Check if it includes "World"

console.log(trimmedText.includes("World")); //true

//========================================================


// let numbers = [1, 2, 3, 4, 5];

// //1. Add 6 to the end.

// numbers.push(6);
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// //2. Remove the first element.

// numbers.shift();
// console.log(numbers); // [2, 3, 4, 5, 6]

// // 3. Find the index of 4.

// console.log(numbers.indexOf(4)); //2

// // 4. Check if all numbers are greater than 0.

// let result = numbers.every(num => num > 0);
// console.log(result);



















