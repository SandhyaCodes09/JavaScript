
for(let i = 1; i < 50; i++){
    if ( i % 3 === 0 &&  i % 5 === 0 ){
        console.log(i, "-> divisible by 3 and 5 (fizzbuzz) ");
    }

    else if(i%3 === 0){
        console.log(i, "-> Divisible by 3 (fizz) ");
    }

        else if(i%5 === 0){
        console.log(i, "-> Divisible by 5 ( buzz )");
    }

    //  else ( i % 3 != 0 && i % 5 != 0 )
       else  console.log(i, "->Number")
    
}


