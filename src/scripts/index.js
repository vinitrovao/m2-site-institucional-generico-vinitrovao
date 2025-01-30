const modal = document.getElementById("info-modal");
const openModalButtons = document.querySelectorAll(".abrir-modal");
const closeModalButton = document.getElementById("closeModalBtn");
  
// Abre o modal
openModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        modal.showModal();
      });
});
  
// Fecha o modal
closeModalButton.addEventListener("click", () => {
      modal.close();
});
  