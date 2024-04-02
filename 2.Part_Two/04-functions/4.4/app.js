(() => {
    function pickLearner(inputAr,n) {
    
      if (n <= 0 || n > inputAr.length) {
         console.error("Le nombre n doit être supérieur à 0 et inférieur à la longueur de inputAr.");
         return [];
      }
      const selectedLearners = [];
      const usedIndices =  new Set();
 
      while (selectedLearners.length < n) {
         const randomIndex = Math.floor(Math.random() * inputAr.length);
         if (!usedIndices.has(randomIndex)) {
             selectedLearners.push(inputAr[randomIndex]);
             usedIndices.add[randomIndex];
         }
      }
      return selectedLearners;
    }
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
    const n = 10;
    console.log("Apprenants sélectionnés:", pickLearner(inputAr, n));
 })();