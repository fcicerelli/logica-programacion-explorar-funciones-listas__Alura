let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El número secreto es menor');
    } else {
      asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
};

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numerMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numerMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
  } else {
    // Si el número generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) { 
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', "Juego de número secreto");
  asignarTextoElemento('.texto__parrafo',`Indica un número del 1 al ${numerMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  asignarTextoElemento('.texto__numero-secreto', `El número secreto es: ${numeroSecreto}`);
}

function reiniciarJuego() {
  // limpiar la caja
  limpiarCaja();
  // Indicar mensaje de intervalo de números
  // Generar número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();
  // Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
