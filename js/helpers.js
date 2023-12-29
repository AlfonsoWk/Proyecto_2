function validarFormulario() {
    let nombreYapellido = document.getElementById("exampleInputName1").value;
    let correo = document.getElementById("exampleInputEmail1").value;
    let telefono = document.getElementById("exampleInputTel1").value;
    let consulta = document.getElementById("exampleFormControlTextarea1").value;


    if (nombreYapellido.trim() === "" || correo.trim() === "" || telefono.trim() === "" || consulta.trim() === "") {
        // Verifica si el botón de envío está desactivado antes de mostrar el mensaje
        if (!document.getElementById('button').disabled) {
            const errorMensaje = document.getElementById('error-mensaje');
            errorMensaje.textContent = "Por favor, completa todos los campos.";
            errorMensaje.style.display = 'block'; // Muestra el mensaje de error
            setTimeout(() => {
                errorMensaje.style.display = 'none'; // Oculta el mensaje después de un tiempo
            }, 5000); // Oculta después de 5 segundos (puedes ajustar este valor)
        }
        return false;
    }

    if (nombreYapellido.trim() === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
        return false;
    }

    if (correo.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    if (telefono.trim() === "") {
        alert("Por favor, ingresa tu teléfono.");
        return false;
    }

    if (!/^\d+$/.test(telefono.trim())) {
        alert("El teléfono debe contener solo números.");
        return false;
    }

    if (consulta.trim() === "") {
        alert("Por favor, ingresa tu consulta o comentario.");
        return false;
    }

    return true;
}
