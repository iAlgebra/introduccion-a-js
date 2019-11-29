/*
Desafío de programación #27: Crear una función que reciba un array de números
como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/

const list = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
const list2 = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];

function removeRepeated(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

console.log(removeRepeated(list2));
