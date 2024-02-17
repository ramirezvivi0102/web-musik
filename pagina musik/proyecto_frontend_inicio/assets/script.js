function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  limpiarErrores();

  // Validación de email
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Correo electrónico inválido";
    formulario.email.focus();
    return false;
  }

  // Validación de contraseña
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

  // Validación de confirmación de contraseña
  if (formulario.confirmacion.value.trim() !== formulario.contrasena.value.trim()) {
    document.getElementById("errorConfirmacion").innerText = "Las contraseñas no coinciden";
    formulario.confirmacion.focus();
    return false;
  }

  // Validación de genero musical
  if (formulario.musical.value === "") {
    document.getElementById("errormusical").innerText = "Seleccione un genero musical";
    formulario.musical.focus();
    return false;
  }

  // Validación de edad
  if (!document.querySelector('input[name="edad"]:checked')) {
    document.getElementById("erroredad").innerText = "Seleccione su edad";
    return false;
  }

  // Validación de términos de uso
  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Debe aceptar los términos de uso";
    formulario.terminos.focus();
    return false;
  }

  

  alert("Datos enviados correctamente");

  return true;
}
  