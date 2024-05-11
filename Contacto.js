

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var celular = document.getElementById('celular').value.trim();
    var pais = document.getElementById('pais').value.trim();
    var ciudad = document.getElementById('ciudad').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    var errorNombre = document.getElementById('errorNombre');
    var errorCorreo = document.getElementById('errorCorreo');
    var errorCelular = document.getElementById('errorCelular');
    var errorPais = document.getElementById('errorPais');
    var errorCiudad = document.getElementById('errorCiudad');
    var errorMensaje = document.getElementById('errorMensaje');
    var mensajeExito = document.getElementById('mensajeExito');
    var mensajeError = document.getElementById('mensajeError');

    // Resetear mensajes de error y éxito
    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorCelular.textContent = '';
    errorPais.textContent = '';
    errorCiudad.textContent = '';
    errorMensaje.textContent = '';
    mensajeExito.style.display = 'none';
    mensajeError.style.display = 'none';

    // Validar nombre
    if (nombre.length < 10) {
      errorNombre.textContent = 'El nombre debe tener al menos 10 caracteres*.';
    }

    // Validar correo
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      errorCorreo.textContent = 'Correo electrónico inválido*.';
    }

    // Validar celular
    var celularRegex = /^[0-9]{9}$/;
    if (!celularRegex.test(celular)) {
     errorCelular.textContent = 'Ingrese un número de celular de 9 digitos válido*.';
    }

    // Validar país
    if (pais === '') {
      errorPais.textContent = 'Por favor, indique un país*.';
    }

    // Validar ciudad
    if (ciudad === '') {
      errorCiudad.textContent = 'Por favor, indique una ciudad*.';
    }
    // Validar mensaje
    if (mensaje.length < 10 ) {
      errorMensaje.textContent = 'El mensaje debe tener un minimo de 10 caracteres*.';
      
    }

    // Verificar si hay algún error
    if (errorNombre.textContent || errorCorreo.textContent || errorTipoProducto.textContent || errorAsunto.textContent || errorMensaje.textContent) {
      return; // Si hay errores, no enviar el formulario
    }

    // Si no hay errores, mostrar mensaje de éxito y resetear el formulario
    mensajeExito.style.display = 'block';
    document.getElementById('formularioContacto').reset();
  });
