(() => {
 // Ask the user to enter their age
 let age = window.prompt("Please enter your age:");
 //Check if age is at least 18
 if (age >=18){
    //Display "You are an adult" if the user is an adult 
    alert("You are an adult");
 } else {
// Display "You are not yet adult" otherwise
   alert("You are not yet an adult");
 }
})();