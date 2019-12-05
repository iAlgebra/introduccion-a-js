//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $button = document.querySelector('#calculate');
const $hours = document.querySelectorAll('.hour');
const $minutes = document.querySelectorAll('.minute');
const $seconds = document.querySelectorAll('.second');
let $totalHs = document.querySelector('#total-hs');
let $totalMn = document.querySelector('#total-mn');
let $totalSc = document.querySelector('#total-sc');


//*********************************** OPTION A ********************************

// $button.onclick = function () {
//     let hoursTotal = 0;
//     let minutesTotal = 0;
//     let secondsTotal = 0;
//
//     for (let i = 0; i < $seconds.length; i++ ) {
//         secondsTotal += Number($seconds[i].value);
//         if (secondsTotal > 59) {
//             secondsTotal -= 60;
//             minutesTotal += 1;
//         }
//     }
//
//     for (let i = 0; i < $minutes.length; i++ ) {
//         minutesTotal += Number($minutes[i].value);
//         if (minutesTotal > 59) {
//             minutesTotal -= 60;
//             hoursTotal += 1;
//         }
//     }
//
//     for (let i = 0; i < $hours.length; i++ ) {
//         hoursTotal += Number($hours[i].value);
//     }
//
//     $totalHs.innerText = hoursTotal;
//     $totalMn.innerText = minutesTotal;
//     $totalSc.innerText = secondsTotal;
// };
//*****************************************************************************


//*********************************** OPTION B ********************************

$button.onclick = function () {
    let hoursTotal = 0;
    let minutesTotal = 0;
    let secondsTotal = 0;

    for (let i = 0; i < $seconds.length; i++ ) {
        secondsTotal += Number($seconds[i].value);
    }
    if (secondsTotal > 59) {
        minutesTotal += Math.floor(secondsTotal / 60);
        secondsTotal = secondsTotal % 60;
    }

    for (let i = 0; i < $minutes.length; i++ ) {
        minutesTotal += Number($minutes[i].value);
    }
    if (minutesTotal > 59) {
        hoursTotal += Math.floor(minutesTotal / 60);
        minutesTotal = minutesTotal % 60;
    }

    for (let i = 0; i < $hours.length; i++ ) {
        hoursTotal += Number($hours[i].value);
    }

    $totalHs.innerText = hoursTotal;
    $totalMn.innerText = minutesTotal;
    $totalSc.innerText = secondsTotal;
};
//*****************************************************************************
