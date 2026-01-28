// JavaScript Variables: var, let, const
// ===============================

// 1) var example (can be redeclared + reassigned)
var city = "Delhi";
console.log("City:", city);

city = "Lucknow"; // reassigned
console.log("Updated City:", city);

var city = "Bhopal"; // redeclared (allowed in var)
console.log("Redeclared City:", city);


// 2) let example (cannot redeclare in same scope, but can reassign)
let age = 20;
console.log("Age:", age);

age = 21; // reassigned (allowed)
console.log("Updated Age:", age);

// let age = 22;  // ❌ Error: cannot redeclare in same scope


// 3) const example (cannot reassign, must initialize)
const country = "India";
console.log("Country:", country);

// country = "USA";  // ❌ Error: cannot reassign const


// 4) Block scope example
// let and const are accessible ONLY inside the block { }

if (true) {
  let blockLet = "I am inside the block";
  const blockConst = "I am also inside the block";

  // These work because they are inside the same block
  console.log(blockLet);
  console.log(blockConst);
}

// The following lines will cause ERROR if uncommented
// because let and const are block scoped

// console.log(blockLet);    // ReferenceError
// console.log(blockConst);  // ReferenceError



// 5) var is NOT block scoped (var leaks out of block)
if (true) {
  var blockVar = "var can go outside block";
}
console.log(blockVar); // ✅ Works (but this is risky)


// 6) const with object (can change properties)
const user = {
  name: "Sandhya",
  role: "Student"
};

console.log("User before:", user);

// Changing property is allowed
user.role = "Developer";
console.log("User after:", user);

// user = { name: "New" }; // ❌ Error: cannot reassign const object


// 7) const with array (can push/pop but cannot reassign)
const numbers = [1, 2, 3];
numbers.push(4); // ✅ allowed
console.log("Numbers:", numbers);

// numbers = [10, 20]; // ❌ Error: cannot reassign

