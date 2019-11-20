/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

let fibonacciSequence = [];

function calculatesFibonacciSequence(i) {
  if (i <= 10) {
    if (i === 0) {
      fibonacciSequence.push(i);
    } else if (i === 1) {
      fibonacciSequence.push(i);
    } else {
      fibonacciSequence.push(
          fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    i++;
    calculatesFibonacciSequence(i);
  }
}

calculatesFibonacciSequence(0);
console.log(fibonacciSequence);
