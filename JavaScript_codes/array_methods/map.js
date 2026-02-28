// map()-> Creates new array by transforming each element(Method that return new array:)

// example:- 1
let arr = [1,2,3,4,5]

// i need to get the squre the all element in the array

let sq_arr = arr.map(elem => elem*elem); // syntax

// let sq_arr = arr.map((elem)=>{  
//     return elem * elem;

// });

console.log(sq_arr);


// example:- 2

// cart contains arrays of items with [item, price, quantity]. amount is in INR.
const cart = [
  ["iPhone 15 Pro Max", 125000, 2],
  ["MacBook Pro", 250000, 1],
  ["Apple Watch Series 9", 50000, 3],
  ["AirPods Pro", 20000, 4],
  ["iPad Pro", 65000, 1],
];

function convertToUSD(amount) {
  return amount / 80;
}

const usdCart = cart.map((item) => {

  return [item[0], convertToUSD(item[1]), item[2]];

});
// Use .map() to convert the card to USD rates and return a new array

let totalPayable = 0;
cart.forEach((item, idx) => {
  const totalPrice = item[1] * item[2];
  totalPayable += totalPrice;
  console.log(`${idx + 1}. ${item[0]} - USD: ${totalPrice}`);
});
console.log(`Total Payable: INR ${totalPayable}`);

