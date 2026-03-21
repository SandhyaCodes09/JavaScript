let pass = document.getElementById('password');
let toggle_checkbox = document.getElementById('togglecheckbox');

toggle_checkbox.addEventListener("change",function(){
    if(toggle_checkbox.checked == true){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
});