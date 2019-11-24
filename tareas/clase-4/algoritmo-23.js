/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

let text = 'dabale arroz a la zorra el abad';
let text2 = 'bienvenido';

function revertArray(str) {
  let revertedText = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revertedText += str[i];
  }
  return revertedText;
}

console.log(revertArray(text));
console.log(revertArray(text2));
