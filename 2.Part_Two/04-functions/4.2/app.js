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
})();