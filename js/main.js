function submitForm() {
   
    let form = document.getElementById("quoteForm");
    form.submit(); // Submit the form
    form.reset();  // Reset all form data
    return false; // Prevent page refresh
 }

 function submitEmailForm() {
   
    let form = document.getElementById("email-form");
    
    form.submit(); // Submit the form
    form.reset();  // Reset all form data
    return false; // Prevent page refresh
 }
