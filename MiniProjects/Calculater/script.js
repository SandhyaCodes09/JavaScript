const input = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let str = "";
for(let i=0; i<buttons.length;i++){
    let buttonsElement = buttons?.[i];

    buttonsElement.addEventListener('click', (e) =>{
        //  console.log(e.target.innerHTML);

        let innerHTML = e.target.innerHTML;
        if(innerHTML === 'AC'){
           str = '';
           input.value = str;
        }

        else if(innerHTML === 'DEL'){
           str = str.substring(0, str.length - 1);
           input.value = str;
        }

        else if(innerHTML === '='){

            str = eval(str);
            input.value = str;
 
        }else{
            str += e.target.innerHTML;
            input.value = str;
        }

    });

}