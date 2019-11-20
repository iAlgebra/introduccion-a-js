/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/

let numbers = [5, -8, 47, 36, 90, -5, -18, 0, 1, -4];

function returnsOnlyPositiveNumbers(arr) {
  let positiveArray = [];
  let text = '';
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      positiveArray.push(arr[i]);
    } else if (Math.sign(arr[i]) === 0) {
      text = 'zero is a neutral number';
    }
  }
  return {
    result: positiveArray,
    additionalInfo: text,
  };
}

console.log(returnsOnlyPositiveNumbers(numbers));
