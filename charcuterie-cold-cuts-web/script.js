const orderForm = document.querySelector("#orderForm");
const formNote = document.querySelector("#formNote");

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "Listo. Recibimos tu reservacion; te contactaremos para confirmar disponibilidad y detalles.";
  orderForm.reset();
});
