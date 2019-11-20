/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

function calculatesFibonacciSequence() {
  let fibonacciSequence = [];
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      fibonacciSequence.push(i);
    } else if (i === 1) {
      fibonacciSequence.push(i);
    } else {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
  }
  return fibonacciSequence;
}

console.log(calculatesFibonacciSequence());
