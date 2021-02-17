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

//Form handler for Email submit form

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


//Form handler for Get Quote form

window.addEventListener("load", function() {

   let quoteForm = document.getElementById("quoteForm");
   quoteForm.addEventListener("submit", function() {

      let userFullName = document.querySelector("input[name=fullName]");
      let userPhone = document.querySelector("input[name=phone]");
      let userEmail = document.querySelector("input[name=email]");
      let userMovingFrom = document.querySelector("input[name=movingFrom]");
      let userMovingTo = document.querySelector("input[name=movingTo]");

      if(userFullName.value === '' || userPhone === '' || userEmail.value === '' || userMovingFrom.value === '' || userMovingTo ==='') {
         Event.preventDefault();
      }
      
   })
})
