// En el script de envío de correo (mail.js)
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validarFormulario()) {
        btn.value = 'Enviando...';
        btn.disabled = true; // Desactiva el botón de envío para evitar envíos duplicados

        const serviceID = 'default_service';
        const templateID = 'template_mtruf8s';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                btn.disabled = false; // Reactiva el botón después del envío
                setTimeout(() => {
                    alert('¡Enviado!');
                    this.reset();
                }, 100);
            }, (err) => {
                btn.value = 'Enviar';
                btn.disabled = false; // Reactiva el botón en caso de error
                alert(JSON.stringify(err));
            });
    }
});
