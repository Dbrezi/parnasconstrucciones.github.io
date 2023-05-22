function validarFormulario() {
  var formulario = document.getElementById("contactform")
  var nombre = formulario.Nombre
  var email = formulario._replyto
  var telefono = formulario.Teléfono
  var asunto = formulario.Asunto
  var mensaje = formulario.Mensaje

  if (nombre.value === "") {
    alert("Por favor ingrese su nombre")
    nombre.focus()
    return false
  }

  if (email.value === "") {
    alert("Por favor ingrese su email")
    email.focus()
    return false
  } else if (
    !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email.value
    )
  ) {
    alert("Por favor ingrese un email válido")
    email.focus()
    return false
  }

  if (telefono.value === "") {
    alert("Por favor ingrese su teléfono")
    telefono.focus()
    return false;
  } else if (!/^\d{10}$/.test(telefono.value)) {
    alert("Por favor ingrese un teléfono válido de 10 dígitos")
    telefono.focus()
    return false
  }

  if (asunto.value === "") {
    alert("Por favor ingrese un asunto")
    asunto.focus()
    return false
  }

  if (mensaje.value === "") {
    alert("Por favor ingrese un mensaje")
    mensaje.focus()
    return false
  }
  return true

 const $form = document.querySelector('#contactform');
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    alert("Gracias por contactarnos. Te escribiremos a la brevedad.");
  }
}

