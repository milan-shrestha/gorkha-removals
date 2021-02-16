// function submitForm() {
   
//     let form = document.getElementById("quoteForm");
//     form.submit(); // Submit the form
//     form.reset();  // Reset all form data
//     return false; // Prevent page refresh
//  }

//  function submitEmailForm() {
   
//     let form = document.getElementById("email-form");

//     let userName = document.querySelector("input[name=username]");
//     let userEmail = document.querySelector("input[name=email]");
//     let userMsg = document.querySelector("input[name=message]");

//     if(userName.value === '' || userEmail.value === '' || userMsg.value === '') {
//        alert("Please enter all fields.");
//        Event.preventDefault();
//     } else {
//       form.submit(); // Submit the form
//       form.reset();  // Reset all form data
//       return false; // Prevent page refresh
//     }
//  }

window.addEventListener("load", function() {

   let emailForm = document.getElementById("email-form");
   emailForm.addEventListener("submit", function() {

      let userName = document.querySelector("input[name=username]");
      let userEmail = document.querySelector("input[name=email]");
      let userMsg = document.querySelector("input[name=message]");

      if(userName.value === '' || userEmail.value === '' || userMsg.value === '') {
         Event.preventDefault();
      } 
      
   })
})
