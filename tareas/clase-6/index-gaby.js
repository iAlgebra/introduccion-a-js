/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function createForm() {
    const $form = document.querySelector('#form-1');
    const $calculate =  document.createElement('button');
    const $reset =  document.createElement('input');

    createFamilyMembers($form);

    $calculate.textContent = 'Calculate';
    $calculate.type = 'button';
    $reset.type = 'reset';
    $reset.value = 'Reset';
    $form.appendChild($calculate);
    $form.appendChild($reset);

    $calculate.onclick = performCalculations;
    $reset.onclick = reset;
}

function createFamilyMembers(container) {
    const familyMembers = Number(prompt('How many people are there in your family group?'));
    const $membersWrapper = document.createElement('div');

    for (let i = 0; i < familyMembers; i++) {
        $membersWrapper.append(createFamilyMember(i));
    }

    container.prepend($membersWrapper);
}

function createFamilyMember(index) {
    const $wrapper =  document.createElement('div');
    const $label =  document.createElement('label');
    const $input =  document.createElement('input');

    $label.textContent = `Family Member #${index+1}: `;
    $label.htmlFor = `member-${index+1}`;
    $input.type = 'number';
    $input.id = `member-${index+1}`;
    $input.placeholder = 'Type age';
    $input.min = '0';

    $wrapper.appendChild($label);
    $wrapper.appendChild($input);

    return $wrapper;
}

function performCalculations() {
    let ages = [];
    const inputs = document.querySelectorAll('input[type="number"]');

    for (let i = 0; i < inputs.length; i++) {
        ages.push(Number(inputs[i].value));
    }

    document.querySelector('.youngest').textContent = findSmallestNumber(ages);
    document.querySelector('.oldest').textContent = findBiggestNumber(ages);
    document.querySelector('.average').textContent = calculateAverage(ages).toFixed(2);

    document.querySelector('.display-info').classList.remove('hidden');
}

function reset() {
    const divs = document.querySelectorAll('#form-1 div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].parentNode.removeChild(divs[i]);
    }

    document.querySelector('.display-info').classList.add('hidden');
    createFamilyMembers(document.querySelector('#form-1'));
}

createForm();
