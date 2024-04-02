(() => {
    let favoriteNumber;

    // Continue asking for the preferred number until the user enters 42
<<<<<<< HEAD

=======
>>>>>>> d2e586dc016d0d93e455f6ba2d132fc1fec46bb3
    while (true) {
        favoriteNumber = window.prompt("Please enter your favorite number:");
    
<<<<<<< HEAD
        //Check if the entered number is different from 42
        if (favoriteNumber !== 42) {
            alert("Are you sure?");
        } else {
            // If the number entered is 42, stop the loop

=======
        // Check if the entered number is different from 42
        if (favoriteNumber !== 42) {
            alert("Are you sure?");
        } else {
            //If the number entered is 42, stop the loop
>>>>>>> d2e586dc016d0d93e455f6ba2d132fc1fec46bb3
            break;
        }
    }
    
<<<<<<< HEAD
    // Once the user enters the number 42, a congratulatory message is shown
=======
    //Once the user enters the number 42, a congratulatory message is shown
>>>>>>> d2e586dc016d0d93e455f6ba2d132fc1fec46bb3
    alert("Congratulations! 42 is a great choice!");
})();
