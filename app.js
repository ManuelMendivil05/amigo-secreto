// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(nombre) {
    let nombreIngresado = document.getElementById('amigo').value.trim();
    //verificar si el nombre ingresado está vacío
    if (!nombreIngresado) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }else{
        //guarda los nombres ingresados en un array
        amigos.push(nombreIngresado);
        mostrarAmigos();
        document.getElementById('amigo').value = ''; //limpia caja
        console.log(`Amigo añadido: ${nombreIngresado}`); //para verificar en la consola
    }
}

function mostrarAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if (amigos.length < 2) {
    alert("Se necesitan al menos dos amigos para sortear.");
        return;
    }
    let ganador = Math.floor(Math.random() * amigos.length);
    alert(`El amigo secreto es: ${amigos[ganador]}`);
}