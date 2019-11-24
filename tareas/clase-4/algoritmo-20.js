/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/

let numList = [9, 1, 2, 3, 4];

function moveToLeft(arr) {
  return arr.push(arr.shift()) && arr;
}

console.log(moveToLeft(numList));
