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

// we want to find last failed student

let last_failed_student_index = marks.findLastIndex((elem)=>{

    if(elem.marks<33){
        return true;
    }else return false;

});

console.log(last_failed_student_index);