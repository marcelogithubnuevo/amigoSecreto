let listaDeAmigos = [];

// limpia el text box donde se digita el nombre del Amigo
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Muestra en pantalla la lista de amigos ingresados
function mostrarEnListaUl(elemento,nombre) {
    let elementoHTML = document.getElementById(elemento);
    let li = document.createElement("li");
    li.textContent = nombre;
    elementoHTML.appendChild(li);
    return;
}

// Determina el amigo secreto
function elejirAmigoSecreto() {
    let indice = 0;
    let amigoSecreto = "";
    indice = Math.floor(Math.random()*listaDeAmigos.length);
    amigoSecreto = listaDeAmigos[indice];
    return amigoSecreto;
}

// Agrega un amigo a la lista de amigos, tag UL
function agregarAmigo() {
    let nombreAmigo = "";
    nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "" || agregarAmigo.length == -1) {
        alert("debe ingresar un nombre");
    } else {
            //Si el nombre generado está incluido en la lista 
            if (listaDeAmigos.includes(nombreAmigo)) {
                alert("debe ingresar nombres distintos");
                return;
            } else {
                // Agrega amigo secreto en la lista
                // limpia text box para ingresar nombre amigo
                // Muestra el nuevo nombre en la lista UL
                listaDeAmigos.push(nombreAmigo);
                limpiarCaja();
                mostrarEnListaUl('listaAmigos',nombreAmigo);
                return;
            }
        
    }

}

// Busca amigo secreto seleccionado
function sortearAmigo() {
    let nombreAmigoSecretoSeleccionado = "";
    nombreAmigoSecretoSeleccionado = elejirAmigoSecreto();
    mostrarEnListaUl('resultado',`el amigo secreto sorteado es: ${nombreAmigoSecretoSeleccionado}`);
    borrarEnListaUl('listaAmigos');
}

// limpia la lista de amigos en pantalla, tag UL
function borrarEnListaUl(elemento) {
    let elementoHTML = document.getElementById(elemento);
    while (elementoHTML.firstChild){
        elementoHTML.removeChild(elementoHTML.firstChild);
    }
    return;
}
