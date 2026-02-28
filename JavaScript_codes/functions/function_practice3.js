// 1) BMI Calculator
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(69, 1.7).toFixed(2));


// 2) Reusable Discount Calculator (HOF)
function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

const ten = discountCalculator(10);
const twenty = discountCalculator(20);
const thirty = discountCalculator(30);

console.log(ten(1200));
console.log(twenty(1500));
console.log(thirty(1800));


// 3) Build a counter using closure
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

const d = counter();
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(d());


// 4) Pure function to transform a value
function double(val) {
    return val * 2;
}

console.log(double(5));


// 5) Use IIFE to isolate variable
(function () {
    const password = "secret password";
    console.log(password);
})();
