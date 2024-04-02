(() => {
   /**
 * Calcule la surface d'un rectangle.
 *
 * @param {number} longueur - La longueur du rectangle.
 * @param {number} largeur - La largeur du rectangle.
 * @returns {number} La surface du rectangle.
 */
   function calcSurface(longueur, largeur) {
       const aire = longueur * largeur;
       return aire;
   }
//Demande à l'utilisateur la longuer du rectangle.
const longueur = prompt("Entrez la longueur du rectangle :");

// Demande à l'utilisateur la largeur du rectangle.
const largeur = prompt("Entrez la largeur du rectangle :");

// Calcule la surface du rectangle en utilisant la fonction calcSurface.
const surface = calcSurface(parseFloat(longueur), parseFloat(largeur));

// Affiche la surface du rectangle.
console.log("La surface du rectangle est : " + surface);

})();