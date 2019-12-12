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
const $removeButton = document.querySelector('.remove');
const $calculateButton = document.querySelector('.calculate');
const $annualSalaryWrapper = document.querySelector('#annual-salary-wrapper');
const $infoDisplay = document.querySelector('.info-display');
let clicks = 0;

$addButton.onclick = function() {
  if ($annualSalaryWrapper.children.length === 0) {
    $calculateButton.disabled = false;
  }
  clicks++;
  createAnnualSalaryInput(clicks);
};

$removeButton.onclick = function() {
  if ($annualSalaryWrapper.children.length > 0) {
    deleteAnnualSalaryInput();
  }
  if ($annualSalaryWrapper.children.length === 0) {
    $calculateButton.disabled = true;
    $infoDisplay.classList.add('hidden');
  }
};

$calculateButton.onclick = function() {
  if ($annualSalaryWrapper.children.length > 0) {
    const MONTHS_IN_A_YEAR = 12;
    const annualSalaryValues = collectValues();
    const highestSalary = findBiggestNumber(annualSalaryValues);
    const lowestSalary = findSmallestNumber(annualSalaryValues);
    const averageAnnualSalary = calculateAverage(annualSalaryValues).toFixed(2);
    const averageMonthlySalary = (calculateAverage(annualSalaryValues) /
        MONTHS_IN_A_YEAR).toFixed(2);
    modifyDOM(highestSalary, lowestSalary, averageAnnualSalary,
        averageMonthlySalary);
    $infoDisplay.classList.remove('hidden');
  }
};

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
  $input.id = `annual-salary-${clickNum}`;
  $input.type = 'number';
  $input.min = '0';
  $input.placeholder = 'Type your Annual Salary';
  return $input;
}

function deleteAnnualSalaryInput() {
  clicks--;
  $annualSalaryWrapper.lastElementChild.remove();
}

function collectValues() {
  const $annualSalaries = document.querySelectorAll(
      '#annual-salary-wrapper input');
  let annualSalaryValues = [];
  $annualSalaries.forEach(function(annualSalary) {
    if (annualSalary.value !== '') {
      annualSalaryValues.push(Number(annualSalary.value));
    }
  });
  return annualSalaryValues;
}

function modifyDOM(highest, lowest, averageAnnual, averageMonthly) {
  const $highestAnnualSalary = document.querySelector('.highest-annual-salary');
  const $lowestAnnualSalary = document.querySelector('.lowest-annual-salary');
  const $averageAnnualSalary = document.querySelector('.average-annual-salary');
  const $averageMonthlySalary = document.querySelector(
      '.average-monthly-salary');

  $highestAnnualSalary.textContent = highest;
  $lowestAnnualSalary.textContent = lowest;
  $averageAnnualSalary.textContent = averageAnnual;
  $averageMonthlySalary.textContent = averageMonthly;
}
