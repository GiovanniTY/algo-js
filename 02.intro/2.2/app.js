(() => {
// Ask the user to enter three numbers
let min = window.prompt("Please enter the minimum number:");
let max = window.prompt("Please enter the maximum number:");
let current = window.prompt ("Please enter the current number:");

// check if min is greater than max
if (min > max) {
    console.log("Error: The minimum number cannot be greater than the maximum number. You might want to review your understanding.");
} else {
// Check if current is between min and max
if (current >= min && current <= max) {
    //Display a message indicating that current is between min and max
  alert("The current number is between the minimum and maximum numbers.");
}}; 
})();