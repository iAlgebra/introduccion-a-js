/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

function addDigits(num) {
  if (num > 0) {
    let output = 0;
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      output += Number(str[i]);
    }
    console.log(output);
  }
}

addDigits(1234);
