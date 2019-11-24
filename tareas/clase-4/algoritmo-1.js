/*
Desafío de programación #1: Imprimí los números del 1 al 10
Resultado: 10 9 8 7 6 5 4 3 2 1
*/

function printFromOneToTen() {
  let num = 10;
  let list = [];
  while (num > 0) {
    list.push(num);
    num--;
  }
  return list;
}

console.assert(JSON.stringify(printFromOneToTen()) ===
    JSON.stringify([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
    'Debe mostrar un array conteniendo los numeros del 10 al 1');
