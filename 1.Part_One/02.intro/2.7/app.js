(() => {
// Ask the user choose a number 
let n = window.prompt("Choose a number n");
// Initialize a sum variable to 0
let sum = 0;
//For every number from 1 to n
for (let i = 0; i < n; i++) {
// Ask user to choose a number
let number = window.prompt ("Please enter a number:");
//Add the entered number to sum
sum += number;
// Shows the total sum
alert("The sum of all the numbers enterd is:" + sum);
}

})();