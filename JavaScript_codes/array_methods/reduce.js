const arr = [2,4,6,8,10];

const even_sum =arr.reduce((acc, currval)=>{
    return acc + currval;
}, 0);

console.log(even_sum);