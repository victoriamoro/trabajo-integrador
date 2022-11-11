const ticketValue = 200;

let studentDiscount = 0.2;
let traineeDiscount = 0.5;
let juniorDiscount = 0.85;

let name = document.getElementById("nombre");
let lastname = document.getElementById("apellido");
let email = document.getElementById("mail");
let ticketQuantity = document.getElementById("cantidadTickets");
let category = document.getElementById("categoriaSelect");

function removeError() {
  let x = document.querySelectorAll(".form-control, .form-select");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("is-invalid");
  }
}

function purchaseTotal() {
  removeError();

  if (nombre.value === "") {
    alert("Por favor ingrese su nombre");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
  }

  if (apellido.value === "") {
    alert("Por favor ingrese su apellido");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
  }

  if (mail.value === "") {
    alert("Por favor ingrese su correo electrónico");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
  }

  if (cantidadTickets.value == 0 || isNaN(cantidadTickets.value)) {
    alert("Debe ingresar una cantidad de tickets");
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    return;
  }

  if (category.value == "") {
    alert("Debe seleccionar una categoría");
    categoria.classList.add("is-invalid");
    categoria.focus();
    return;
  }

  let totalTicketValue = cantidadTickets.value * ticketValue;

  switch (category.value) {
    case "0":
      totalTicketValue = totalTicketValue;
      break;
    case "1":
      totalTicketValue *= studentDiscount;
      break;
    case "2":
      totalTicketValue *= traineeDiscount;
      break;
    case "3":
      totalTicketValue *= juniorDiscount;
      break;
  }

  totalPago.innerHTML = totalTicketValue;
}

btnResumen.addEventListener("click", purchaseTotal);

const resetForm = () => {
  removeError();
  totalPago.innerHTML = "";
};
btnBorrar.addEventListener("click", resetForm);
