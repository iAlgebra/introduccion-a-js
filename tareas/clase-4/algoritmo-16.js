/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/

function isAPrimeNumber(n) {
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

console.assert(isAPrimeNumber(15) === false, '15 deberia no ser un num primo');
console.assert(isAPrimeNumber(3) === true, '3 deberia ser un num primo');