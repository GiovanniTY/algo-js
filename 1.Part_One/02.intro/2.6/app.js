(() => {
    (() => {
        // Ask the user to enter a number between 1 and 7
        let number = parseInt(prompt("Please enter a number between 1 and 7:"));
    
        // Use a switch statement to determine the corresponding day of the week
        let day;
        switch(number) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            case 7:
                day = "Sunday";
                break;
            default:
                day = "Error: Please enter a number between 1 and 7.";
        }
    
        // Show the day of the week corresponding to the user
        alert("The day of the week corresponding to the number " + number + " is: " + day);
    })();
    

})();