const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    verificarInputs();
});

function verificarInputs() {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const asuntoValor = asunto.value.trim();
    const mensajeValor = mensaje.value.trim();

    if (nombreValor === ''){
        // Mostrar mensaje de error
        // Añadir clase error
        setErrorFor (nombre, 'El nombre no puede estar vacío');
    } else {
        // Añadir clase correcto
        setCorrectoFor(nombre);
    }
    if (emailValor === ''){
        // Mostrar mensaje de error
        // Añadir clase error
        setErrorFor (email, 'El email no puede estar vacío');
    } else if (!isEmail(emailValor)) {
        setErrorFor(email, 'El email no es válido')
    } else {
        // Añadir clase correcto
        setCorrectoFor(email);
    }
    if (asuntoValor === ''){
        // Mostrar mensaje de error
        // Añadir clase error
        setErrorFor (asunto, 'El asunto no puede estar vacío');
    } else {
        // Añadir clase correcto
        setCorrectoFor(asunto);
    }
    if (mensajeValor === ''){
        // Mostrar mensaje de error
        // Añadir clase error
        setErrorFor (mensaje, 'El mensaje no puede estar vacío');
    } else {
        // Añadir clase correcto
        setCorrectoFor(mensaje);
    }
}

// Función para agregar la clase error
function setErrorFor (input, errorMensaje) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    
    // Añadir mensaje de error personalizado
    small.innerText = errorMensaje;
    formControl.className = 'form-control error';
}

// Función para agregar la clase correcto
function setCorrectoFor (input){
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control correcto'; // Añadir clase correcto
}

// Función para comprobar si el correo es válido
function isEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}

// Función para imprimir los datos en Consola
function resetear() {
    form.reset();
    location.reload();
}

// Función para imprimir los datos en Consola
function enviar() {
    console.clear();
    // Si el formulario está lleno y cumple requisitos, mostrar alerta
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const asuntoValor = asunto.value.trim();
    const mensajeValor = mensaje.value.trim();

    if(nombreValor != '' && emailValor != ''  && asuntoValor != '' && mensajeValor != ''){
        var arrayInput = new Array();
        var inputsValues = document.getElementsByClassName('input');
        namesValue = [].map.call(inputsValues, function(dataInput){
            arrayInput.push(dataInput.value);
        });
        console.log("Los siguientes datos fueron enviados correctamente: ");
        arrayInput.forEach(function(inputsValuesData){
            console.log(inputsValuesData);
        });
        alert("Los datos fueron impresos en consola correctamente");
    }
}