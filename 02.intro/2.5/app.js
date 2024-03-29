(() => {
    let favoriteNumber;

    // Continue asking for the preferred number until the user enters 42

    while (true) {
        favoriteNumber = window.prompt("Please enter your favorite number:");
    
        //Check if the entered number is different from 42
        if (favoriteNumber !== 42) {
            alert("Are you sure?");
        } else {
            // If the number entered is 42, stop the loop

            break;
        }
    }
    
    // Once the user enters the number 42, a congratulatory message is shown
    alert("Congratulations! 42 is a great choice!");
})();