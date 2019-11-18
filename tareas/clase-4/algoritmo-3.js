/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7
 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
 */

function printTable7(num) {
  const text = num + ' x ';
  for(let i = 0; i <= 10; i++) {
    console.log(text + i + ' = ' + num * i);
  }
}

printTable7(7);
