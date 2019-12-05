//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $button = document.querySelector('#submit');
const $header = document.querySelector('h1');
const $userInfo = document.querySelector('#user-info');
$button.onclick = function() {
    const name = document.querySelector('#name').value;
    const middleName = document.querySelector('#middle-name').value;
    const surname = document.querySelector('#surname').value;
    const age = document.querySelector('#age').value;
    $header.innerText = `Welcome, ${name}!`;
    $userInfo.innerText = `Hi, ${name} ${middleName} ${surname}! So you are ${age} years old.`;
}

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
*/
