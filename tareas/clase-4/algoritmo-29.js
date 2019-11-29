/*
Desafío de programación #29: Print the distance between the first 100 prime numbers
*/

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function printPrimeNumbers(numbersToPrint) {
  let primeCounter = 0;
  let n = 0;
  let primeNumbers = [];
  while (primeCounter < numbersToPrint) {
    if (isPrimeNumber(n)) {
      primeCounter++;
      primeNumbers.push(n);
    }
    n++;
  }
  return primeNumbers;
}

console.log(printPrimeNumbers(100));

function distances() {
  const primeNumbers = printPrimeNumbers(100);
  for (let i = 0; i < primeNumbers.length - 1; i++) {
    console.log(primeNumbers[i + 1] + ' - ' + primeNumbers[i] + ' = ' +
        (primeNumbers[i + 1] - primeNumbers[i]));
  }
}

distances();
