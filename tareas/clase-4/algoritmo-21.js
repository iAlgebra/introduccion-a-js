/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/

let numList = [2, 3];

function moveToRight(arr) {
  return arr.unshift(arr.pop()) && arr;
}

console.log(moveToRight(numList));
