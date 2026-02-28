// example:1
const obj = {
    first_name : "Anshu",
    last_name: "Sharma",
    age: 25,
    gender : "Male",
};

const {first_name, age} = obj;

console.log(first_name);
console.log(age);

//example 2

let student ={
    name: "Manu",
    marks: {
       biology:90,
       physics:89
    }
};

let {marks: {biology, physics}} = student;
console.log(biology);