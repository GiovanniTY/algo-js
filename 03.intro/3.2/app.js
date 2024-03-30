(() => {

// Array of numbers
const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

// Calculate sum for each array
let sum1 = 0;
for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}
const average1 = sum1 / array1.length;

let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
}
const average2 = sum2 / array2.length;

// Display results
console.log("Average of array 1:", average1);
console.log("Average of array 2:", average2);


})();