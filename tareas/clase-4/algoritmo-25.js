/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos)
de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
*/

const list1 = [1, 2, 5, 7, 10, 15, 18];
const list2 = [3, 2, 9, 10, 18, 21];

function joinArrays(arr1, arr2) {
  const result = [];
  const joinedArray = arr1.concat(arr2);

  for (let i = 0; i < joinedArray.length; i++) {
    let hasFoundEqual = false;
    for (let j = 0; j < joinedArray.length; j++) {
      if (i === j) {
        continue;
      }
      if (joinedArray[i] === joinedArray[j]) {
        hasFoundEqual = true;
      }
    }
    if (!hasFoundEqual) {
      result.push(joinedArray[i]);
    }
  }

  return result;
}

console.log(joinArrays(list1, list2));
