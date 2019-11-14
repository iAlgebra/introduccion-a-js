// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreDeUsuario = (prompt('Cual es tu nombre?') || '').toLowerCase();

// null indica la ausencia de valor, esta vacio. Eso pasa si hacemos 'esc' en un prompt.
// el string vacio se obtiene si hacemos 'enter' en un prompt sin ingresar datos.
// un string vacio no es lo mismo que null.
// 0, -0, false, '', null, undefined, NaN --> false
// el || chequea que al menos 1 cosa es TRUE, si lo 1ro da false, te devuelve lo 2do (sin importar si es FALSE)
//i.e. '' || false --> devuelve false

const MI_NOMBRE = 'gabriela';
const NOMBRE_MEJOR_AMIGO = 'florencia';

if (nombreDeUsuario === MI_NOMBRE) {
  console.log(`Hola, Tocayo! Yo también me llamo ${nombreDeUsuario}`);
} else if (nombreDeUsuario === NOMBRE_MEJOR_AMIGO) {
  console.log(`Hola, ${nombreDeUsuario}! Te llamas igual que mi mejor amiga`);
} else if (nombreDeUsuario.trim().length === 0) {
  console.log('No escribiste tu nombre!');
} else {
  console.log(`Hola, ${nombreDeUsuario}!`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 33;
const edadUsuario = Number(prompt('Cual es tu edad?'));

if (edadUsuario === 0) { // Number('') y Number(null) da 0
  console.log('Tenes que ingresar tu edad');
} else if (isNaN(edadUsuario)) { // si escribe cualquier otra cosa diferente de un integer
  console.log('Ingresa por favor un numero en digitos');
} else if (edadUsuario === MI_EDAD) {
  console.log('Tenemos la misma edad!');
} else if (edadUsuario > MI_EDAD) {
  console.log('Sos mas grande que yo');
} else if (edadUsuario < MI_EDAD) {
  console.log('Sos mas chico que yo');
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = (prompt('Tenes el DNI?', 'SI / NO') || '').toLowerCase();

function bouncer(poseeDni) {
  if (poseeDni === 'si') {
    const edadUsuario = Number(prompt('cuantos años tenes?'));
    if (edadUsuario === 0) { // Number(null) && Number('') --> 0
      console.log('Tenes que ingresar tu edad');
    } else if (isNaN(edadUsuario)) {
      console.log('No entendi. Ingresa por favor tu edad en digitos');
    } else if (edadUsuario >= 18) {
      console.log('Podes pasar!');
    } else if (edadUsuario < 18) {
      console.log('Sos menor, volvete a tu casa!');
    }
  } else if (poseeDni === 'no') {
    console.log('No podes entrar hasta que traigas tu documento');
  } else if (poseeDni === '') {
    console.log('Me tenes que contestar algo');
  } else {
    console.log('Perdona, no entendi la respuesta');
  }
}

bouncer(tieneDocumento);
