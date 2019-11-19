/*
Desafìo de programación  #2: Imprimí los números impares del 1 al 100
 1 3 5 ... 99
*/

// function printOddNumbers() {
//   for (let num = 1; num <= 100; num++) {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//   }
// }

function printOddNumbers() {
  for (let num = 1; num <= 100; num += 2) {
    console.log(num);
  }
}

printOddNumbers();
