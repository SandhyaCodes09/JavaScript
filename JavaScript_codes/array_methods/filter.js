// filter()-> Returns elements that match condition(Method that return new array:)
let marks = [

     {
        first_name: "Sonam",
        marks:65
    },

      {
        first_name: "Annu",
        marks:67
    },
         {
        first_name: "Priya",
        marks:31
    },
     {
        first_name: "Laxmi",
        marks:23
    },
      {
        first_name: "Vaishanvi",
        marks:20
    },


]

// I want list of all the names of the students(first_name) who are failing

const failstudent = marks.filter((elem,idx)=>{
    if(elem.marks<33){
        return true;
    }else return false;
});

console.log(failstudent);