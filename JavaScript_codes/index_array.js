// Create and declare arrays
const emptyArray = [];
const fruitBasket = ["apple", "banana", "cherry", "date", "elderberry"];
const temperatureReadings = [22.3, 21.4, 23.5, 24.6, 25.7];
const userData = ["John Doe", 25, "john.doe@example.com"];
const nestedFruitBaskets = [
  ["apple", "banana", "cherry"],
  ["date", "elderberry"],
  ["fig", "grape"],
];

// Accessing elements in an array
console.log("The best fruit to eat before hitting the gym is: ", fruitBasket[1]);
console.log("Yesterday's temperature was: ", temperatureReadings[3]);
console.log(
    userData[0], 
    "is",
    userData[1],
    "years old and can be contacted at",
     userData[2]
     );

console.log("I love an", nestedFruitBaskets[0][0]);
console.log("pancakes are great!", nestedFruitBaskets[1][0]);
console.log("juice!",nestedFruitBaskets[2][1]);
