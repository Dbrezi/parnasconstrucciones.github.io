function validarFormulario() {
    var formulario = document.getElementById("miFormulario");
    var camposRequeridos = formulario.querySelectorAll("[required]");
  
    for (var i = 0; i < camposRequeridos.length; i++) {
        if (!camposRequeridos[i].value) {
            alert("Por favor, complete todos los campos requeridos.");
            return false;
        }
    }
    return true;
  }