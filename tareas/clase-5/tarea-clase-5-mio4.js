//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $elements = document.querySelectorAll('ol li');
const $average = document.querySelector('.average');
const $smallest = document.querySelector('.smallest');
const $biggest = document.querySelector('.biggest');
const $frequent = document.querySelector('.frequent');
let numbers = [];

$elements.forEach(function (element) {
    numbers.push(Number(element.textContent));
});

function calulateAverage (arr) {
    let result = 0;
    arr.forEach(function (e) {
        result += e;
    });
    return result / arr.length;
}

function findSmallestNumber(arr) {
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

function findBiggestNumber(arr) {
    let biggest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

function findfrequentNumber(arr) {
    const checking = arr[0];
    let maxRepeats = 0;
    let currentRepeats = 0;

    console.log('number being checked is ' + arr[0]);

    // count how many times the 1st element is repeated
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === checking) {
            currentRepeats++;
        }
    }
    
    console.log('the number ' + arr[0] + ' repeats ' + currentRepeats + ' times');

    if (currentRepeats > maxRepeats) {
        maxRepeats = currentRepeats;
    }

/*    // delete that element which was checked, and every instance
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === checking) {
            arr.splice(j, 1);
        }
    }*/

    console.log('the array now looks like this ' + arr);
}

$average.textContent = calulateAverage(numbers);
$smallest.textContent = findSmallestNumber(numbers);
$biggest.textContent = findBiggestNumber(numbers);
// $frequent.textContent = findfrequentNumber(numbers);
findfrequentNumber(numbers);
