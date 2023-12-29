function validarUsuario() {

    let usuario = "admin";
    let password = 3690;

    if (document.forms["form"].password.value == password && document.forms["form"].login.value == usuario) {
        alert("Bienvenido a la página de Administración");
        window.location = "../pages/administracion.html";
        this.reset();
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
}
