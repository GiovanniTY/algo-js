(() => {
   // Definition of an example array
const numbers = [10, 5, 8, 20, 3];

// Initialize variables for the minimum and maximum values
let min = numbers[0];
let max = numbers[0];

// Iterate through the array to find the minimum and maximum
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// Print the minimum and maximum values
console.log("The minimum value in the array is:", min);
console.log("The maximum value in the array is:", max);


})();