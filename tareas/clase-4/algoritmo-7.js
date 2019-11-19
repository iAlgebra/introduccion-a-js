/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

function addOddNumbersBetweenTenAndThirty() {
  let result = 0;
  for (let i = 11; i < 30; i += 2) {
    result += i;
  }
  console.log(result);
}

addOddNumbersBetweenTenAndThirty();
