/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
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

function printPrimeNumbers(numbersToPrint, greaterThan) {
  let primeNumbersFound = 0;
  let n = 0;
  let primeNumbers = [];
  while (primeNumbersFound < numbersToPrint) {
    if (isPrimeNumber(n) && n > greaterThan) {
      primeNumbersFound++;
      primeNumbers.push(n);
    }
    n++;
  }
  return primeNumbers;
}

console.log(printPrimeNumbers(2, 5000));
