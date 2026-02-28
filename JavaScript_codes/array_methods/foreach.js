let arr = ['Sandhya', 'female', '23', 'Lucknow']

arr.forEach( (elem,ind)=>{
   console.log(elem,ind);
} )

// ex 2

// cart contains arrays of items with [item, price, quantity]
const cart = [
  ["iPhone 15 Pro Max", 125000, 2],
  ["MacBook Pro", 250000, 1],
  ["Apple Watch Series 9", 50000, 3],
  ["AirPods Pro", 20000, 4],
  ["iPad Pro", 65000, 1],
];

let totalPayable = 0;

cart.foreach((item,idx)=>{
    const totalPrice = item[1]*item[2];
    totalPayable += totalPrice;
    console.log(`${idx + 1}.${item[0]} - INR:${totalPrice}`);
});

console.log(`Total Payable: INR ${totalPayable}`);