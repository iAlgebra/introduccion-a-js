/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

function printTablesOneToNine() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 10; j++) {
      console.log(i + ' x ' + j + ' = ' + i * j);
    }
  }
}

printTablesOneToNine();
