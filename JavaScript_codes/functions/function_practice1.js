// function declaration

function greet(){
    console.log("Hello JavaScript");
}

greet();

//function expression 

let fanc = function(){
    console.log("I'm Learn JavaScript");
}

fanc();


//fat arrow function
// no own this, no arguments object


let fnc = () => {
    console.log("My Name is Sandhya");
};

fnc();

// =======================================================

function dance(v1){
    console.log(`${v1} naach raha hai`);
}

console.log("ghoda");
console.log("ghadha");
console.log("cheel");


// function parameter vs argument 

function add (v1, v2){  // v1,v2 are parameters
    console.log(v1+v2);
}

add(2,9); // arguments 
add(450, 200);

// default ,rest and spred parameters

// default parameters

function addition(v1 = 1,v2 = 1){
    console.log(v1+v2);
}
addition(3,4);

// rest (...)

function abc(...val){
    console.log(val);
}

abc(1, 2, 3, 4, 5, 6, 7, 8);

let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread

//ex-2

function abcd(a,b,c,...val){
    console.log(a,b,c, val);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8);


// return values and early returns

function fnc1 (){
    return 12;
}






let val = fnc1();
console.log(val);

// first class functions(assign to variables pass as arguments, return from other functions)
// first class functions -> functions ko value ki tarah treat kr skte hai

function book (val){
    val();
}
 book(function notebook(){
    console.log("This is my Notebook");
 });
 
 book(function homework(){
    console.log("this is my homework");
 });

 // higher oder function -> vo hota hai jo return kre ek function ya fir acceept kre ek function apne parameter me 

function nest(bird){  // higher order function // function accept
    bird();
}

nest(function sparow(){
    console.log("chidiya chi chi kar rhi hai");
});


function name(){   // return funciton
    return function(){ 
        console.log("Hey Sandhya");
    };
}

name()();  // function call
 

