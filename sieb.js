let startingTime = Date.now();
let primeNumbers = [];
let maximumNumber = 250000;
let maximumPrimeNumberNeeded = Math.round(Math.sqrt(maximumNumber) + 1);
for (let i = 2; i <= maximumNumber; i++) {
    primeNumbers.push(i);
}
for (let i = 2; i <= maximumPrimeNumberNeeded; i++) {
    if (primeNumbers.includes(i)) {
        primeNumbers = primeNumbers.filter(number => {
            return number === i ? true : number % i !== 0;
        });
    }
}
let endingTime = Date.now();
let timeNeeded = endingTime - startingTime;
primeNumbers.forEach(prime => console.log(prime));
console.log(timeNeeded + "ms needed.");
// 32ms needed for 125000
// 82ms needed for 250000