/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]
 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
 */

function addArrayFromOneToTen() {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result += i;
  }
  console.log(result);
}

addArrayFromOneToTen();
