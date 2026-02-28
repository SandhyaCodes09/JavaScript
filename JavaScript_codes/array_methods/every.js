let arr = [2,4,6,8,10,12,3];

let every_arr = arr.every((elem)=>{  // considerd each value has been satisfy by every method return true whether false
   return elem % 2 === 0; // its only return a boolean value
});

console.log(every_arr);



