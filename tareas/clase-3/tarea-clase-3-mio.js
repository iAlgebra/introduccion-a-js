// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*const nombreDeUsuario = (prompt('Cual es tu nombre?',
    'Ingrese su nombre')).toLowerCase();
const miNombre = 'gabriela';
const nombreMejorAmigo = 'florencia';

if (nombreDeUsuario === miNombre) {
  console.log(`Hola, Tocayo! Yo también me llamo ${nombreDeUsuario}`);
} else if (nombreDeUsuario === nombreMejorAmigo) {
  console.log(`Hola, ${nombreDeUsuario}! Te llamas igual que mi mejor amiga`);
} else {
  console.log(`Hola, ${nombreDeUsuario}!`);
}*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*const edadUsuario = Number(prompt('Cual es tu edad?', 'Ingrese su edad'));
const miEdad = 33;

if (edadUsuario > miEdad) {
  console.log('Sos mas grande que yo');
} else if (edadUsuario === miEdad) {
  console.log('Tenemos la misma edad!');
} else {
  console.log('Sos mas chico que yo');
}*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt('Tenes el DNI?', 'SI / NO').toLowerCase();

function bouncer(poseeDni) {
  if (poseeDni === 'si') {
    const edadUsuario = Number(prompt('cuantos años tenes?'));
    if (edadUsuario >= 18)  {
      console.log('Podes pasar!');
    } else {
      console.log('Sos menor, volvete a tu casa!');
    }
  } else if (poseeDni === 'no') {
    console.log('No podes entrar hasta que traigas tu documento');
  } else {
    console.log('No te entendi, perdona!');
  }
}

bouncer(tieneDocumento);
