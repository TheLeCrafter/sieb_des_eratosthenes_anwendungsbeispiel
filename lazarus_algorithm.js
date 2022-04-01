let startingTime = Date.now()
let primeNumbers = [];
let zaehlerAnzahl = 0;
for (let i = 1; i <= 250000; i++) {
    for (let zaehler = 1; zaehler <= i; zaehler++) {
        if (i % zaehler === 0) {
            zaehlerAnzahl++;
        }
    }
    if (zaehlerAnzahl === 2) {
        primeNumbers.push(i);
    }
    zaehlerAnzahl = 0;
}
let endingTime = Date.now();
let timeNeeded = endingTime - startingTime;
primeNumbers.forEach(prime => console.log(prime));
console.log(timeNeeded + "ms needed.");
// 26.868ms needed for 125000
// 107.039ms needed for 250000