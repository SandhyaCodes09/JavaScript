// It is just dismantling of array
// distructuringis an feature that allows extracting values form array or objects and assigning them to seoerate variable in a single variable

// example:1 
let arr = [1,2,3,4,false,'String'];

const [a,b,c,d,boolean,str] = arr;

console.log(c);

// example:2 // Nested Array Destructuring

let data = [10,[20,30],40];

let [j,[k,l],m] = data;

console.log(j,k,l,m);

// example:3  // Swapping Variables (Very Useful) interview  favourite question

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5


//example:4
// Function Returning Multiple Values

function getUser(){
    return ["Sandhya",23,"Developer"];
}

let [name, age, role] = getUser();

console.log(name);

