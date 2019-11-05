// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

/*function calcularEdad(añoActual, añoDeNacimiento) {
  return añoActual - añoDeNacimiento;
}*/

// let añodeNacimiento = prompt('En que año naciste?');
// let añoActual = prompt('En que año estamos?');

// cuando 2 strings que son numero se suman, se concatenan (se adhieren) y la maquina te devuelve un string.
// cuando 2 strings que son numero se restan, la maquina entiende que son numeros, los resta y te devuelve un numero.

// console.log('Vos tenes ' + calcularEdad(añoActual, añodeNacimiento) + ' años');


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

/*function calcularSalarioAnual(salarioMensual) {
  return Number((salarioMensual * 12).toFixed(2));
}

function calcularSalarioMensual(salarioAnual) {
  return Number((salarioAnual / 12).toFixed(2));
}

function calcularSalarioSemanal(salarioAnual) {
  return Number((salarioAnual / 52).toFixed(2));
}

function calcularSalarioDiario(salarioAnual) {
  return Number((salarioAnual / 365).toFixed(2));
}

function calcularSalarioPorHora(salarioDiario) {
  return Number((salarioDiario / 24).toFixed(2));
}*/

/*let salarioAnual = Number(prompt('Cuanto ganas por año?'));
let salarioPorMes = Number(prompt('Cuanto ganas por mes?'));*/

/*console.log('Vos ganas por mes $' + calcularSalarioMensual(salarioAnual));
console.log('Vos ganas por año $' + calcularSalarioAnual(salarioPorMes));
console.log('Vos ganas por semana $' + calcularSalarioSemanal(salarioAnual));
let sueldoDiario = calcularSalarioDiario(salarioAnual);
console.log('Vos ganas por dia $' + sueldoDiario);
console.log('Vos ganas por hora $' + calcularSalarioPorHora(sueldoDiario));*/

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// console.log(mensaje); //error
// let mensaje = 'Hola, mundo';


// function hoisting

/*pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}*/
// pruebaHoisting();

var a = 1; //global
let b = 2; //global
let z;

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función
    let z = 5;

    console.log(z);

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
console.log(z);
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
