const  button = document.getElementById('btn');

button.addEventListener("mousedown",()=>{    // alert("btn has been clicked")
    button.style.backgroundColor = 'red'
    button.textContent = 'Button has been pressed'
});

button.addEventListener("mouseup", ()=>{
    button.style.backgroundColor = 'green'
    button.textContent = 'Button has been released'

});

