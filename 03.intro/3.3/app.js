(() => {
// First array
const array1 = [1,2,3];
//Second array
let array2 = [];
//Cycle for
for (let i = 0; i < array1.length; i++) {
    //Duplicate each element and add it to array2
    array2.push(array1[i]* 2);
    console.log(array2);
}
//Second method
let array3 = ["Giovanni","Manu","Tom","Illies"];
let array4= array3.slice();
console.log(array4);

})();