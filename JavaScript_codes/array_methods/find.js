// find() -> Returns first matching element(Method that return single value)
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

// I want first failed student in this array 

const first_failed_student = marks.find((elem,idx)=>{
    if(elem.marks<33){
        return true;
    }else return false;
});

console.log(first_failed_student);