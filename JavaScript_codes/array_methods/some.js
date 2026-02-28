let marks = [34,40, 44, 49,50]

// want to check if any of the student iis failling -  failing criteria>= 33

let check = marks.some((elem,ind) => {
    if (elem < 38){
        return true;
    }else false;
});

console.log(check);

