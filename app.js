
//Declaramos las variables
let entrada_amigo = document.getElementById ("amigo");
let listaAmigos = []; //Hacamos un array para almacear a los amigos
let ul_lista_amigos = document.getElementById ("listaAmigos");
let ul_resultado = document.getElementById("resultado");

//Advertencia para que ingrese datos
function agregar_Amigo(){
    if (entrada_amigo.value == ""){
        alert("Debes ingresar un nombre");
    };
    listaAmigos.push(entrada_amigo.value);
    // ul_lista_amigos.innerHTML = ul_lista_amigos.innerHTML + entrada_amigo.value;
    ul_lista_amigos.innerHTML += `<li>${entrada_amigo.value}</li>`;
    //Limpiando el campo de entrada
    entrada_amigo.value = '';
};

//funcion para sortear al amigo
function sortearAmigo(){
    let random = Math.floor((Math.random() * listaAmigos.length));
    let amigoSecreto = listaAmigos[random];
    ul_resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    //console.log(ul_resultado);
};

function reiniciarJuego(){
    listaAmigos = [];  // Limpiar el array de amigos
    ul_lista_amigos.innerHTML = '';  // Limpiar la lista de amigos en el HTML
    ul_resultado.innerHTML = '';  // Limpiar los resultados del sorteo
    entrada_amigo.value = '';  // Limpiar el campo de entrada
};

// Asociar el botón de reiniciar con la función reiniciarJuego
document.getElementById('reiniciar_juego').addEventListener('click', reiniciarJuego);