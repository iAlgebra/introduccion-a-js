/*
Desafío de programación #26: Crear una función que reciba dos arrays de números
y retorne un nuevo array con los elementos que se encuentren en el primer array,
pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

let arr1 = [1, 2, 3, 10, 5, 3, 14];
let arr2 = [-1, 4, 5, 6, 14];

// let arr1 = [5, 1, 2, 3, 4];
// let arr2 = [3, 4];

function subtraction(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        arr1.splice(i, 1);
      }
    }
  }
  return arr1;
}

console.log(subtraction(arr1, arr2));
