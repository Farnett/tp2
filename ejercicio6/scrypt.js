// script.js
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const correo = document.getElementById('correo').value;
    const mensajeValidacion = document.getElementById('mensajeValidacion');

    let mensaje = '';
    let esValido = true;

    if (!nombre || nombre.length > 50) {
        mensaje += 'El nombre no puede estar vacío y debe tener un máximo de 50 caracteres.<br>';
        esValido = false;
    }

    if (!apellido || apellido.length > 50) {
        mensaje += 'El apellido no puede estar vacío y debe tener un máximo de 50 caracteres.<br>';
        esValido = false;
    }

    if (isNaN(edad) || edad < 0 || edad < 18) {
        mensaje += 'La edad debe ser un número positivo y mayor o igual a 18.<br>';
        esValido = false;
    }

    if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje += 'La altura debe ser un número positivo y menor o igual a 230 cm.<br>';
        esValido = false;
    }

    if (!correo || !correo.includes('@')) {
        mensaje += 'El correo electrónico no puede estar vacío y debe incluir el "@"<br>';
        esValido = false;
    }

    mensajeValidacion.innerHTML = mensaje;
    mensajeValidacion.style.color = esValido ? 'green' : 'red';
}
