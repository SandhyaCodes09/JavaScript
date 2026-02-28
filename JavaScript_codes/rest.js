const arr = [1,2,3,4,5,6,7,8,9]

const [a,...b] = arr;

console.log(a,b);

//=================================================

// rest example 2

let numbers = [1,2,3,4,5];

let [first, second, ...others] = numbers;

console.log(others); // [3,4,5]
