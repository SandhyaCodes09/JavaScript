const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Build an Anonymous function that processes numbers to find even numbers

const evenNumbers = function (arr) {

  let evens = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {

      evens.push(arr[i]);

    }

  }

  return evens;

};

try {
  // Using the anonymous function
  const result = evenNumbers(numbers);
  console.log("Original numbers:", numbers);
  console.log("Even numbers:", result);
} catch {
  console.error("Please read instructions carefully and try again");
}
