let inp = document.getElementById("keyboard");

inp.addEventListener('keyup', (e) => {
let ans = document.getElementById('ans')
  ans.innerText = e.keyCode;
let key = document.getElementById("key-text");
  key.innerText = e.key;

});





