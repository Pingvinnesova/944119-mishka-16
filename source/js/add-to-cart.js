var topProductButton = document.querySelector(".top-product__button");
var ModalOverlay = document.querySelector(".modal-overlay");

topProductButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  ModalOverlay.classList.add("modal-overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (ModalOverlay.classList.contains("modal-overlay--show")) {
      evt.preventDefault();
      ModalOverlay.classList.remove("modal-overlay--show");
    }
  }
});
