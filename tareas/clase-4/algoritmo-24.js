/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

function joinArrays(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
}

console.assert(JSON.stringify(joinArrays([1, 2, 3], ['a', 'b', 'c'])) ===
    JSON.stringify([1, 2, 3, 'a', 'b', 'c']),
    'Deberia mostrar un array [1,2,3,"a","b","c"]');
console.assert(JSON.stringify(joinArrays([], [])) === JSON.stringify([]),
    'Deberia mostrar un array vacio');
console.assert(
    JSON.stringify(joinArrays([], [1, 2, 3])) === JSON.stringify([1, 2, 3]),
    'Deberia mostrar un array [1,2,3]');
