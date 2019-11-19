/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/

function fromCelsiusToFahrenheit(celsius) {
  let fahrenheit;
  const numberA = 9 / 5;
  const numberB = 32;
  fahrenheit = Number((celsius * numberA + numberB).toFixed(1));
  console.log(celsius + '°C equals to ' + fahrenheit + '°F');
}

fromCelsiusToFahrenheit(36);
