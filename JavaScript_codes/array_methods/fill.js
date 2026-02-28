// Use fill() to create an array of 5 zeros

const emptyArray = new Array(5).fill(0);

// Use fill() to create an array of 4 "A"s

const customArray = new Array(4).fill("A");

// Use fill() to create an array of 5 "X"s, starting from index 1 and ending at index 3
const partialFill = [1, 2, 3, 4, 5].fill("X", 1, 4);


// Use split() and fill() to mask the last 5 digits of a phone number

const phoneNumber = "9876543210";

const phoneNumberArrayWithZeros = phoneNumber
  .split("")
  .fill("X", 5)
  .join("");

try {
  console.log("Array filled with zeros:", emptyArray);
  console.log("Array filled with 'A':", customArray);
  console.log(
    "Array partially filled with 'X' (from index 1 to 3):",
    partialFill
  );
  console.log(
    "Phone number with the last 5 digits replaced with 'X' for masking purposes:",
    phoneNumberArrayWithZeros
  );
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
