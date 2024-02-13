const backdropOpen = document.getElementById("backdrop-open");
const backdropClose = document.getElementById("backdrop-close");
const backdrop = document.getElementById("backdrop");

backdropOpen.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

backdropClose.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

const headerModalOpen = document.getElementById("modal-menu-open");
const headerModalClose = document.getElementById("modal-menu-close");
const headerModal = document.getElementById("header-modal-menu");

headerModalOpen.addEventListener("click", (e) => {
  headerModal.classList.add("is-open");
});

headerModalClose.addEventListener("click", () => {
  headerModal.classList.remove("is-open");
});
