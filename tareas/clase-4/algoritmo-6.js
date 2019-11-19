/*
Desafío de programación #6: Calcula 10! (10 factorial)
 10 * 9 * 8 * ... * 1
*/

function calculatesTenFactorial(num = 10) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  console.log(result);
}

calculatesTenFactorial(); // Also works for any other number
