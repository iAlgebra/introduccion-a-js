/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

let numbers = [5, 10, 70, 30];

function calculateAverage(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return (result / arr.length).toFixed(2);
}

console.log(calculateAverage(numbers));
