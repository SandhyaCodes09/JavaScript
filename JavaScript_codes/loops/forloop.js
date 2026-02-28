//example:1
let sum = 0;
for(let i = 1; i<=4; i++){
    sum += i;
}
console.log(sum);

//example:2

for (let i=0; i<5; i++){
    if(i===2)continue;
    console.log(i);
}