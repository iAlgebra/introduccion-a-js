/*
Desafío de programación #28: Calculate the sum of first 100 prime numbers
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

function sumPrimeNumbers(numbersToSum) {
  let primeCounter = 0;
  let n = 0;
  let sumResult = 0;
  while (primeCounter < numbersToSum) {
    if (isPrimeNumber(n)) {
      primeCounter++;
      sumResult += n;
    }
    n++;
  }
  return sumResult;
}

console.log(sumPrimeNumbers(100));
