(() => {
    // Définit une fonction pour sélectionner des apprenants au hasard
    function pickLearner(inputAr, n) {
        // Vérifie si le nombre de sélection est valide
        if (n <= 0 || n > inputAr.length) {
            console.error("Le nombre n doit être supérieur à 0 et inférieur à la longueur de inputAr.");
            return [];
        }
        // Initialise un tableau pour stocker les apprenants sélectionnés
        const selectedLearners = [];
        // Initialise un ensemble pour suivre les indices déjà utilisés
        const usedIndices = new Set();

        // Tant que le nombre d'apprenants sélectionnés est inférieur à n
        while (selectedLearners.length < n) {
            // Génère un indice aléatoire
            const randomIndex = Math.floor(Math.random() * inputAr.length);
            // Vérifie si l'indice n'a pas déjà été utilisé
            if (!usedIndices.has(randomIndex)) {
                // Ajoute l'apprenant correspondant à l'indice au tableau des sélectionnés
                selectedLearners.push(inputAr[randomIndex]);
                // Ajoute l'indice aux indices utilisés
                usedIndices.add(randomIndex);
            }
        }
        // Retourne le tableau des apprenants sélectionnés
        return selectedLearners;
    }

    // Définit un tableau d'apprenants
    const inputAr = [
        {nom: 'Lyne'},
        {nom: 'Dj3y'},
        {nom: 'Zara'},
        {nom: 'Manu le goat'},
        {nom: 'Adrien'},
        {nom: 'NathAmd'},
        {nom: 'Xeless le goat'},
        {nom: 'Caroline'},
        {nom: 'Arnaud'},
        {nom: 'Stacy'},
        {nom: 'Justine'},
        {nom: 'Angel'},
        {nom: 'Dylan'},
        {nom: 'Adca'},
        {nom: 'isabelle'},
        {nom: 'doblaria'},
        {nom: 'Youri'},
        {nom: 'Giovanni le goat de la finance'},
        {nom: 'Iliess le goat'},
        {nom: 'Justine L'},
        {nom: 'Denis'},
        {nom: 'Mohamed'},
        {nom: 'ludovic'},
        {nom: 'Maryam'},
        {nom: 'Julie'},
        {nom: 'Jordan'},
        {nom: 'Tasha'},
    ];

    // Définit le nombre d'apprenants à sélectionner
    const n = 10;

    // Affiche les apprenants sélectionnés
    console.log("Apprenants sélectionnés:", pickLearner(inputAr, n));
})();