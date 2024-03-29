(() => {
    let favoriteNumber;

    // Continua a chiedere il numero preferito finché l'utente non inserisce 42
    while (true) {
        favoriteNumber = parseInt(prompt("Please enter your favorite number:"));
    
        // Controlla se il numero inserito è diverso da 42
        if (favoriteNumber !== 42) {
            alert("Are you sure?");
        } else {
            // Se il numero inserito è 42, interrompi il ciclo
            break;
        }
    }
    
    // Una volta che l'utente ha inserito il numero 42, viene mostrato un messaggio di congratulazioni
    alert("Congratulations! 42 is a great choice!");
})();