(() => {
// Excercise 2.4
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        // Number even
        let result = i / 2;
        console.log("Number even:", i, "Division by 2", result);
     } else {
        //Number odd
        let result = i * 3;
        console.log("Odd Number", i, "multiplication by 2", result);
    }
}
})();