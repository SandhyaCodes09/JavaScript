// Pure vs Impure function
// Pure function: does not change outside state, same input => same output
// Impure function: changes outside state OR depends on outside state

let a = 10;

function laugh() { // Pure (it doesn't change outside state)
    console.log("hehehehe😁😁😁");
}

laugh();

function number() { // Impure (it changes outside variable 'a')
    a++;
}

number();
console.log("a after number():", a); // 11


// Closures and Lexical Scoping
// Closure: function returns another function, and returned function remembers parent variables

function abcd() {
    let x = 13;

    return function () {
        console.log(x);
    };
}

const result = abcd();
result();


// Lexical scoping: inner function can access outer function variables

function college() {
    let college_name = "AKTU";
    let a = 10;

    console.log("a:", a);
    console.log("college:", college_name);

    function school() {
        let school_name = "KPIC";
        console.log("school:", school_name);

        function kindergarten() {
            let k_name = "canddyfloss";
            console.log("kinder:", k_name);

            // It can also access outer variables:
            console.log("from college:", college_name);
        }

        kindergarten();
    }

    school();
}

college();


// IIFE – Immediately Invoked Function Expression
(function () {
    console.log("run immediately");
})();


// Hoisting: Declarations vs Expressions
// Function declaration is hoisted ✅

str();

function str() {
    console.log("JS allows hoisting for function declarations");
}

// Function expression is NOT hoisted ❌
// test(); // ❌ Uncommenting this will cause error

const test = function () {
    console.log("function expression");
};

test(); // ✅ works only after definition
