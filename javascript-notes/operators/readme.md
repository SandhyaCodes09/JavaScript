# JavaScript Operators

Operators are special symbols used to perform operations on values and variables.
They help us do calculations, comparisons, and logical decisions in a program.

Example:
let sum = 10 + 5;

## 1. Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.

| Operator | Description |
|--------|------------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus (remainder) |

### Example:

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
## 2. Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Description         |
| -------- | ------------------- |
| =        | Assign value        |
| +=       | Add and assign      |
| -=       | Subtract and assign |
| *=       | Multiply and assign |
| /=       | Divide and assign   |

### Example:
let x = 5;
x += 2; // x = x + 2
x *= 3; // x = x * 3


## 3. Comparison Operators

Comparison operators compare two values and return a boolean value (true or false).

| Operator | Description                         |
| -------- | ----------------------------------- |
|==	       | Equal (checks value only)           |
|==	       |Strict equal (checks value and type) |
|!=	       | Not equal                           |
|!==	     |  Strict not equal                   |
|>	       | Greater than                        |
|<         |Less than                            |
|>=	       | Greater than or equal to            |
|<=	       |Less than or equal to                |

### Example:
console.log(5 == "5");   // true
console.log(5 === "5"); // false
console.log(10 > 5);    // true


## 4. Logical Operators

Logical operators are used to combine multiple conditions.

| Operator | Description      |
| -------- | -----------------|
| &&	     |    Logical AND   |
|  \|\|    |   Logical OR    	|
| !	       |  Logical NOT     |

### Example:
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

## 5. Bitwise Operators

Bitwise operators work on binary numbers (0 and 1).
They perform operations at the bit level instead of the value level.

In JavaScript, numbers are stored in binary form internally.
Bitwise operators first convert numbers into 32-bit binary, perform the operation, and then return the result.

---

### Types of Bitwise Operators

| Operator | Name | Description |
|--------|------|-------------|
| & | AND | Sets each bit to 1 if both bits are 1 |
| \| | OR | Sets each bit to 1 if at least one bit is 1 |
| ^ | XOR | Sets each bit to 1 if bits are different |
| ~ | NOT | Inverts all bits |
| << | Left Shift | Shifts bits to the left |
| >> | Right Shift | Shifts bits to the right |


### 1. Bitwise AND (&)

Returns 1 only if both bits are 1.
Example:

let a = 5;  // 0101
let b = 3;  // 0011

console.log(a & b); // 1 (0001)

### 2. Bitwise OR (|)

Returns 1 if at least one bit is 1.

### Example:

let a = 5;  // 0101
let b = 3;  // 0011

console.log(a | b); // 7 (0111)

### 3. Bitwise XOR (^)

Returns 1 if bits are different.

### Example:

let a = 5;  // 0101
let b = 3;  // 0011

console.log(a ^ b); // 6 (0110)

### 4. Bitwise NOT (~)

Inverts all bits (0 becomes 1 and 1 becomes 0).

###  Example:

let a = 5;
console.log(~a); // -6

Note:
Bitwise NOT also changes the sign because of 2’s complement representation.

### 5. Left Shift (<<)

Shifts bits to the left and fills with 0 on the right.

### Example:

let a = 5; // 0101
console.log(a << 1); // 10 (1010)

### 6. Right Shift (>>)

Shifts bits to the right and preserves the sign bit.

### Example:

let a = 5; // 0101
console.log(a >> 1); // 2 (0010)


## 6. Unary Operators

Unary operators work on a single operand (one value).

| Operator | Description   |
| -------- | --------------|
|  ++      |	Increment|
|  --	     | Decrement|
|  typeof	|  Returns data type|

### Example:

let n = 5;
n++;
console.log(n); // 6

console.log(typeof n); // number


## 7. Ternary Operator

The ternary operator is a short form of if-else.

Syntax:

condition ? value_if_true : value_if_false;

## 8. Operator Precedence

Operator precedence determines the order in which operators are executed.

### Example:
let result = 10 + 5 * 2;


In this example, multiplication (*) is performed before addition (+).

** Best Practices

Prefer === instead of ==

Use parentheses ( ) for better readability

Avoid complex expressions in a single line

===============================================================================================


## 🧠 Super-short explanation
- Bitwise = **binary (0/1) pe kaam**
- `& | ^` = bit level logic
- `<< >>` = bits ko left/right shift karna
- Daily JS me **rare**, interviews me **important**

---

## 📌 Interview line (golden)
> **Bitwise operators perform operations on binary representations of numbers, unlike logical operators which work on boolean values.**
 



