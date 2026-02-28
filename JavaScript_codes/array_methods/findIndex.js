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

// I want first match element index in student in this array 

const first_failed_student_index = marks.findIndex((elem,idx)=>{
    if(elem.marks<33){
        return true;
    }else return false;
});

console.log(first_failed_student_index);