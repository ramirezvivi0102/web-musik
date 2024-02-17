function validar(formulario) {
  limpiarErrores();

  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Correo electrónico inválido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length === 0) {
    document.getElementById("errorContrasena").innerText = "Campo de contraseña obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 8) {
    document.getElementById("errorContrasena").innerText = "La contraseña debe tener al menos 8 caracteres";
    formulario.contrasena.focus();
    return false;
  }

  // Aquí puedes realizar la lógica adicional, como enviar los datos al servidor para autenticación
  // ...

  var valido = true; // Variable para indicar si la validación es exitosa

  // Validación adicional (opcional)
  // ...

  if (valido) {
    window.location.href = "index.html";
  }

  return valido;
}