(() => {
    function factorial(a) {
        // Condition de base : si a est égal à 0 ou 1, retourne 1
        if (a <= 1) {
            return 1;
        }
        // Étape récursive : appelle la fonction factorial avec a - 1 et multiplie le résultat par a
        return a * factorial(a - 1);
    }
    console.log(factorial(5));
})();