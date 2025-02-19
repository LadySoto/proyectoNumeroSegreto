let numeroSecreto = 0;
let intentosUsuario = 0;
let intentos = 3;
let listaNumerosSorteados =[];
let numeroMaximoSecreto = 10;

function asignarUnElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximoSecreto) {
        asignarUnElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function verificarIntento(){

    let numeroIngresadoUsuario = parseInt(document.getElementById('valorIngresado').value); 

    //console.log(numeroSecreto);

    if(isNaN(numeroIngresadoUsuario)){
        asignarUnElemento('p','Ingresa un valor numérico');
    }
    
    if(numeroIngresadoUsuario < 1 || numeroIngresadoUsuario > 10){
        asignarUnElemento('p','¡Número fuera de rango! Intenta de nuevo');
        limpiarInput();
        return;
    }

    intentosUsuario++;

    if(numeroIngresadoUsuario === numeroSecreto){
        asignarUnElemento('p','¡Felicidades! Lo lograste al intento número ' + intentosUsuario);
        document.getElementById('reiniciar').removeAttribute('disabled');  
        return;
    }else{

        if(numeroIngresadoUsuario > numeroSecreto){
            asignarUnElemento('p','¡Demasiado alto! Intenta de nuevo');
        }else{
            asignarUnElemento('p','¡Demasiado bajo! Intenta de nuevo');
        }
        limpiarInput();
    }

    if(intentosUsuario >= intentos){
        asignarUnElemento('p',`¡Lo siento! agotaste tus intentos, el número secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
}

function limpiarInput(){
    document.getElementById('valorIngresado').value = '';
}

function condicionesDeInicio(){
    asignarUnElemento('h1','Juego del número secreto');
    asignarUnElemento('h2','Anímate y juega');
    asignarUnElemento('p','Ingresa un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentosUsuario = 0;
}

function reiniciarJuego(){

    //Limpiar la caja
    limpiarInput();
    //Indicar el texto de ingresar número
    //Generar número secreto
    //Reiniciar contador de intentos 
    condicionesDeInicio();  
    //Desabilitar el botón nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesDeInicio();




