let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroSecreto);
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);
  return;
};

function generarNumeroSecreto() {
  return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', "Juego de número secreto");

asignarTextoElemento('.texto__parrafo','Indica un número del 1 al 10');

asignarTextoElemento('.texto__numero-secreto', `El número secreto es: ${numeroSecreto}`);