console.log("Hola CH38"); 

function enviarSaludo() {
    alert("Bienvenido :)");
}


/**
 * Pedir el nombre de la persona usando prompt ()
 * Mostrar saludo y nombre de la persona con alert()
 */


function enviarSaludoAPersona() {
    // Pedir al usuario que ingrese su nombre
    var nombre = prompt("Por favor, ingresa tu nombre:");

    // Comprobar si se ingresó un nombre
    if (nombre != null && nombre != "") {
        // Mostrar el saludo con el nombre ingresado
        alert("¡Hola, " + nombre + "! Bienvenido.");
    } else {
        // Mostrar un mensaje si no se ingresó un nombre
        alert("No ingresaste ningún nombre. Por favor, intenta de nuevo.");
    }
}