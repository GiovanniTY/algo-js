(() => {
    function askTvSerie() {
        // Demander à l'utilisateur le nom de la série
        let nom = prompt('Nom de la série télévisée');
        // Demander à l'utilisateur l'année de production
        let anneeDeProduction = prompt('Année de production');

        // Initialiser un tableau vide pour stocker les noms des acteurs
        let acteurs = [];

        // Initialiser une variable pour vérifier si l'utilisateur souhaite ajouter un acteur supplémentaire
        let ajouterActeur = true;

        // Boucle while pour permettre à l'utilisateur d'entrer les noms des acteurs
        while (ajouterActeur) {
            // Demander à l'utilisateur d'entrer le nom de l'acteur
            let acteur = prompt("Nom de l'acteur (ou appuyez sur Annuler pour terminer):");

            // Vérifier si l'utilisateur a cliqué sur Annuler ou a laissé le champ vide
            if (acteur === null || acteur === "") {
                ajouterActeur = false;  // Sortir de la boucle si l'utilisateur a cliqué sur Annuler ou a laissé le champ vide
            } else {
                // Ajouter le nom de l'acteur au tableau des acteurs
                acteurs.push(acteur);
            }
        }

        // Créer un objet représentant la série TV avec les informations fournies par l'utilisateur
        let tvSerie = {
            nom: nom,
            anneeDeProduction: anneeDeProduction,
            acteurs: acteurs
        };

        // Retourner l'objet représentant la série TV
        return tvSerie;
    }

    // Appel de la fonction askTvSerie et affichage du résultat dans la console
    console.log(askTvSerie());

    function randomizeCast(tvSerie) {
        // Cloner le tableau de base pour ne pas modifier l'original
        const shuffledCast = [...tvSerie.acteurs];

        // Définir une fonction de comparaison aléatoire pour la méthode de tri
        const randomComparison = () => Math.random() - 0.5;

        // Trie aléatoirement le tableau d'acteurs à l'aide de la fonction de comparaison aléatoire
        shuffledCast.sort(randomComparison);

        return shuffledCast;
    }

    // Appel de la fonction randomizeCast et affichage du résultat dans la console
    console.log(randomizeCast(askTvSerie()));
})();
