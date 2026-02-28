let marks_obtaind = 23;

if (marks_obtaind >= 33){
    console.log("Student has Passed");
}else{
    console.log("Better Luck Next Time");
}


// example-> 2

const temperatureReadings = [-2, -3.5, 12, 18, 22, 11.2, 34, 38, 30, 43];
const selectedTemperature = temperatureReadings[1];

// Implement the logic to check the temperature and print the appropriate message

if (selectedTemperature >= 49){
    console.log("It's extremely hot outside! Stay hydrated!");
}else if(selectedTemperature >= 48){
    console.log("It's quite warm today!");
}else if(selectedTemperature >= 46){
    console.log("The temperature is pleasant!");
}else if(selectedTemperature >= -2){
     console.log("It's cool outside, consider wearing a jacket!");
}else {
     console.log("It's freezing outside! Bundle up warmly!");
}


// example->3 

let x = 10;

if (x > 5){
    if(x > 15){
        console.log("Large");
    }else{
        console.log("Medium");
    }
    }else{ console.log("Smalll");

    }

// example->4


let score = 85;

if (score >= 90){
    console.log("A");
} else if(score >=80){
    console.log("B");
}else{
    console.log("C");
}

// example->5

let flag = false;

if(flag){
    console.log("Yes");
}else{
    console.log("No");
}

// example -6 
// What is the output when using a falsy value in the condition? 

 value = 0; 
 if (value) { 
    console.log("True");
 } else { 
    console.log("False"); 
}