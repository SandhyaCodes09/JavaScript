const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit",function(event){
      event.preventDefault();
      let formResponses = {};
      for (let el of event.target.elements){
          formResponses[el.name] = el.value;
      }
        console.table(formResponses);
});
