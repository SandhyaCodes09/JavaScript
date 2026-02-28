// type conversion 

console.log(10+'10'); // got convered into string
console.log(10*'1');// got convered into number

console.log(20+true);
console.log(20+false);


console.log(30+null);

//priorty rules

// Number + String + String
// Number + Boolean = Number
// Number +Null = Null is Treated as 0

// 1. How JavaScript Converts Types When Using Numbers
console.log("--- Converting Strings and Numbers ---");
// Write a console.log that shows the result of adding a number to a string
console.log(1 + "2"); 
// Write a console.log that shows the result of subtracting a string from a number
console.log(1 - "2");
// Write a console.log that shows the result of multiplying two strings
console.log("3" * "2");
// Write a console.log that shows the result of adding a number to a string with a plus sign before it
console.log(1 + +"2");

// 2. How JavaScript Handles True/False Conversion
console.log("\n--- Understanding True/False Values ---");
// Write a console.log that shows the result of converting an empty string to a boolean
console.log(Boolean("")); 
// Write a console.log that shows the result of converting a non-empty string to a boolean
console.log(Boolean("0")); 
// Write a console.log that shows the result of converting a zero to a boolean
console.log(Boolean(0));
// Write a console.log that shows the result of converting an empty array to a boolean
console.log(Boolean([])); 
// Write a console.log that shows the result of converting an empty object to a boolean
console.log(Boolean({}));
// 3. Comparing Values: Regular (==) vs Strict (===)
console.log("\n--- Different Ways of Comparing Values ---");
// Write a console.log that shows the result of comparing a number to a string
console.log(0 == "0");
// Write a console.log that shows the result of comparing a number to a string with a strict equality operator
console.log(0 === "0");
// Write a console.log that shows the result of comparing an array to a boolean
console.log([] == false); 
// Write a console.log that shows the result of comparing an array to a boolean with a strict equality operator
// console.log([] === false);
// 4. How Objects Convert to Simple Values
console.log("\n--- Converting Objects to Simple Values ---");
// Create an object with a valueOf method that returns 42
const obj = { valueOf: () => 42 };
// Write a console.log that shows the result of adding a number to an object
console.log(obj + 1); 
// Write a console.log that shows the result of adding two arrays
console.log([1, 2] + [3, 4]);
// 5. Understanding null and undefined
console.log("\n--- Working with null and undefined ---");
// Write a console.log that shows the result of comparing null to undefined
console.log(null == undefined); 
// Write a console.log that shows the result of comparing null to undefined with a strict equality operator
console.log(null === undefined);
// Write a console.log that shows the result of checking the type of null
console.log(typeof null);
// Write a console.log that shows the result of checking the type of undefined
console.log(typeof undefined);
// 6. Special Number: NaN (Not a Number)
console.log("\n--- Understanding NaN (Not a Number) ---");
// Write a console.log that shows the result of comparing NaN to itself
console.log(NaN === NaN); 
// Write a console.log that shows the result of checking if NaN is a number
console.log(Number.isNaN(NaN));
// Write a console.log that shows the result of dividing zero by zero
console.log(0 / 0);
// Write a console.log that shows the result of dividing infinity by infinity
console.log(Infinity / Infinity);
// 7. Tricky Number Cases
console.log("\n--- Confusing Number Behaviors ---");
// Write a console.log that shows the result of comparing 1 to 2 and then 2 to 3
console.log(1 < 2 < 3); 
// Write a console.log that shows the result of comparing 3 to 2 and then 2 to 1
console.log(3 > 2 > 1);
// Write a console.log that simply outputs the number 999999999999999
console.log(999999999999999);
// Write a console.log that simply outputs the number 9999999999999999
console.log(9999999999999999);
// 8. How Objects Convert in Different Situations
console.log("\n--- How Objects Convert Differently ---");
// Create an object with a toString method that returns "Hello" and a valueOf method that returns 42
const obj2 = {

  toString: () => "Hello",

  valueOf: () => 42,

};
// Write a console.log that shows the result of converting an object to a string
console.log(`${obj2}`);
// Write a console.log that shows the result of adding a number to an object
console.log(obj2 + 0); 
// 9. How Arrays Convert in Different Situations
console.log("\n--- How Arrays Convert ---");
// Write a console.log that shows the result of adding an empty array to an object
console.log([] + {});
// Write a console.log that shows the result of adding an object to an empty array
console.log({} + []); 
// Write a console.log that shows the result of adding two empty arrays
console.log([] + []); 
// 10. Values that are Always False
console.log("\n--- Values JavaScript Considers False ---");
// Write a console.log that shows the result of converting false to a boolean
console.log(Boolean(false)); 
// Write a console.log that shows the result of converting zero to a boolean
console.log(Boolean(0)); 
// Write a console.log that shows the result of converting an empty string to a boolean
console.log(Boolean(""));
// Write a console.log that shows the result of converting null to a boolean
console.log(Boolean(null));
// Write a console.log that shows the result of converting undefined to a boolean
console.log(Boolean(undefined));
// Write a console.log that shows the result of converting NaN to a boolean
console.log(Boolean(NaN)); 