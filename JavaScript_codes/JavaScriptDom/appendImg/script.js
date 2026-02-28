let img = document.getElementById("img");

// showing function
function showing(){
   img.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
      img.style.display = "block";   // important

 img.style.width = "500px";
    img.style.height = "auto";   
}

// hideing function

function hideing(){
   img.style.display = "none";
}