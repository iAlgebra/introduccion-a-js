/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/

let numbers = [6, 5, 4, 3, 2, 1];

function revertArray(arr) {
  let revertedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revertedArray.push(arr[i]);
  }
  return revertedArray;
}

console.log(revertArray(numbers));
