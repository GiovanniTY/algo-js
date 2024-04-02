(() => {
/**
 * Calcule la distance euclidienne entre deux points dans un espace à deux dimensions.
 * 
 * @param {Array} a - Les coordonnées du premier point sous la forme [x, y].
 * @param {Array} b - Les coordonnées du deuxième point sous la forme [x, y].
 * @returns {number} La distance euclidienne entre les deux points.
 */
function calcDistance(a, b) {
    // Extraire les coordonnées x et y des points a et b
    const x1 = a[0];
    const y1 = a[1];
    const x2 = b[0];
    const y2 = b[1];

    // Calculer la distance euclidienne
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // Retourner la distance calculée
    return distance;
}

    // Tester la fonction avec quelques exemples
    console.log("Distanza tra [1, 1] e [2, 2]:", calcDistance([1, 1], [2, 2]));
    console.log("Distanza tra [1, 1] e [3, 1]:", calcDistance([1, 1], [3, 1]));
    console.log("Distanza tra [4, 1] e [1, 1]:", calcDistance([4, 1], [1, 1]));
    console.log("Distanza tra [-2, 2] e [2, -2]:", calcDistance([-2, 2], [2, -2]));
})();