/*
Desafío de programación #18: Imprimir los primeros 100 números primos
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
  while (primeCounter < numbersToPrint ) {
    if (isPrimeNumber(n)) {
      primeCounter++;
      primeNumbers.push(n);
    }
    n++;
  }
  return primeNumbers;
}

console.log(printPrimeNumbers(100));
