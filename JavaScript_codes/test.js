// for(let i= 1; i<10; i++){
//     console.log(i);
// }

// ===================================
// JavaScript Operators – All Examples
// ===================================


// 1️⃣ Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.33
console.log("Modulus:", a % b);         // 1


// 2️⃣ Assignment Operators
let x = 5;
x += 2;  // x = x + 2
console.log("x after += :", x);

x -= 1;  // x = x - 1
console.log("x after -= :", x);

x *= 3;  // x = x * 3
console.log("x after *= :", x);

x /= 2;  // x = x / 2
console.log("x after /= :", x);


// 3️⃣ Comparison Operators
console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(5 <= 3);      // false


// 4️⃣ Logical Operators
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false


// 5️⃣ Unary Operators
let n = 5;

n++;
console.log("After increment:", n); // 6

n--;
console.log("After decrement:", n); // 5

console.log(typeof n); // number


// 6️⃣ Ternary Operator
let marks = 45;
let result = marks >= 50 ? "Pass" : "Fail";
console.log("Result:", result);


// 7️⃣ Bitwise Operators
let p = 5;  // 0101
let q = 3;  // 0011

console.log("Bitwise AND:", p & q); // 1
console.log("Bitwise OR:", p | q);  // 7
console.log("Bitwise XOR:", p ^ q); // 6
console.log("Bitwise NOT:", ~p);    // -6
console.log("Left Shift:", p << 1); // 10
console.log("Right Shift:", p >> 1);// 2


// 8️⃣ Logical Operators with Truthy/Falsy
console.log(0 || 10);       // 10
console.log(0 && 10);       // 0
console.log("" || "Hello"); // Hello
console.log(null && 5);     // null


// 9️⃣ Operator Precedence
let value = 10 + 5 * 2;
console.log("Operator Precedence:", value); // 20





