const mydiv = document.getElementById("my_div");

mydiv.addEventListener("mousemove", ()=>{
    mydiv.style.backgroundColor = 'purple'
    mydiv.style.cursor = 'pointer'
    mydiv.textContent ='This is text after Hovering'

});