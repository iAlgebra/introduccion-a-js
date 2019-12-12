/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
inputs+labels para completar el salario anual de cada integrante de la familia
que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor
salario anual, menor salario anual, salario anual promedio y salario mensual
promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addButton = document.querySelector('.add');
const $form = document.querySelector('#form');
const $annualSalaryWrapper = document.querySelector('#annual-salary-wrapper');
let clicks = 0;

$addButton.onclick = function() {
  clicks++;
  createAnnualSalaryInput(clicks);
}

function createAnnualSalaryInput(clickNum) {
  const $label = createLabel(clickNum);
  const $input = createInput(clickNum);
  const $wrapper = document.createElement('div');
  $wrapper.appendChild($label);
  $wrapper.appendChild($input);
  $annualSalaryWrapper.appendChild($wrapper);
}

function createLabel(clickNum) {
  const $label = document.createElement('label');
  $label.htmlFor = `annual-salary-${clickNum}`;
  $label.textContent = `Annual Salary #${clickNum}: `;
  return $label;
}

function createInput(clickNum) {
  const $input = document.createElement('input');
  $input.id = `annual-salary-${clickNum}`
  $input.type = 'number';
  $input.min = '0';
  $input.placeholder = 'Type your Annual Salary';
  return $input;
}
