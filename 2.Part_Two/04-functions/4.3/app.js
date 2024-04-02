(() => {
/**
 * Génère un nombre aléatoire compris entre 1 et 10 inclus.
 * @returns {number} Le nombre aléatoire généré.
 */
function rand10() {
    let rand = Math.random() * 10;
    return Math.floor(rand) + 1; // Ajoute 1 pour obtenir un nombre entre 1 et 10 inclus
}

// Exemple d'utilisation de la fonction rand10()
console.log("Nombre aléatoire entre 1 et 10:", rand10());

function multiRand(n) {
    let randomNumbers = [];

    for (let i = 0; i < n; i++) {
        let randomNumber = rand10();
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

const n = 5 ; // Définis le nombre de nombres aléatoires à générer
console.log("Nombres aléatoires générés:", multiRand(n));

})();