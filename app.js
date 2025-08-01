

let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeMaximoJuego = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    intentos++;

    if(listaNumerosSorteados.length == numeMaximoJuego){
        asignarTextoElemento('p','Se alcanzo el numero maximo de numeros');
    }else{

        console.log(numeroSecreto);
        if(numeroUsuario === numeroSecreto){
            asignarTextoElemento('p',`Asertaste el numero en ${intentos} ${(intentos===1)?' Vez':'Veces'}`);
            //habilitar boton reinciar juego
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if(numeroUsuario > numeroSecreto){
                asignarTextoElemento('p','El numero secreto es menor');
            }else{
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            limpiarCaja();
        }

    }
  
    
    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`ndica un numero del 1 al ${numeMaximoJuego}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*numeMaximoJuego) + 1;
    console.log(numeroSecreto);
    if(listaNumerosSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
    
}

condicionesIniciales();
