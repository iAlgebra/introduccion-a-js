/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/

function addArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
}

addArray([100, 22, 43, 64, 15, 86, 70, 78, 19, 34]);
