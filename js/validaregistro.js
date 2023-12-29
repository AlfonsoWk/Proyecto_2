function validarRegistro() {
    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let confirmPassword = document.getElementById("confirmar-contraseña").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("opciones").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let domicilio = document.getElementById("domicilio").value;
    let telefono = document.getElementById("telefono").value;
    let codigoPostal = document.getElementById("codigo").value;
    let ofertaCheckbox = document.getElementById("oferta");
    let terminosCheckbox = document.getElementById("terminos");

    // Validación de registro completo
    if (
        nombre.trim() === "" ||
        usuario.trim() === "" ||
        contraseña.trim() === "" ||
        confirmPassword.trim() === "" ||
        email.trim() === "" ||
        sexo.trim() === "sexo" ||
        nacimiento.trim() === "" ||
        domicilio.trim() === "" ||
        telefono.trim() === "" ||
        codigoPostal.trim() === ""
    ) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

     // Validación de los checkboxes
     if (!ofertaCheckbox.checked) {
        alert("Debes aceptar recibir ofertas para continuar.");
        return false;
    }

    if (!terminosCheckbox.checked) {
        alert("Debes aceptar los términos y condiciones para continuar.");
        return false;
    }

    // Validación de contraseñas
    if (contraseña !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Validación de solo letras para el campo de nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return false;
    }

    // Validación de solo números para el campo de teléfono y código postal
    if (!/^\d+$/.test(telefono)) {
        alert("El teléfono solo debe contener números.");
        return false;
    }

    if (!/^\d+$/.test(codigoPostal)) {
        alert("El código postal solo debe contener números.");
        return false;
    }

    // Puedes agregar más validaciones según tus necesidades

    return true;
}
