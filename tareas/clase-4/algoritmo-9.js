/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/

function fromFahrenheitToCelsius(fahrenheit) {
  let celsius;
  const numberA = 32;
  const numberB = 5 / 9;
  celsius = Number(((fahrenheit - numberA) * numberB).toFixed(1));
  console.log(fahrenheit + '°F equals to ' + celsius + '°C');
}

fromFahrenheitToCelsius(32);
