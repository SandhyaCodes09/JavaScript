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

// I want last failed student in this array 

const last_failed_student = marks.findLast((elem,idx)=>{
    if(elem.marks<33){
        return true;
    }else return false;
});

console.log(last_failed_student);