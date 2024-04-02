(() => {
//Definition of arrays
const array1 = [1,2,3,4,5];
const array2 = [100,101,102];
//Initialize a variable to get the sum
let sum1 = 0;
let sum2 = 0;
// Iterate through the array and add each element to the sum
for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}

for (let i = 0; i < array2.length; i++){
    sum2 += array2[i];
}
//Shows the result
console.log("Sum of array 1:", + sum1);
console.log("Sum of array 2:" + sum2);

})();