var ProductButtonBunny = document.querySelector(".catalog-card__btn--bunny");
var ProductButtonBasket = document.querySelector(".catalog-card__btn--basket");
var ProductButtonToys = document.querySelector(".catalog-card__btn--toys");
var ModalOverlay = document.querySelector(".modal-overlay");


ProductButtonBunny.addEventListener("click", function(evt) {
  evt.preventDefault();
  ModalOverlay.classList.add("modal-overlay--show");
});

ProductButtonBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  ModalOverlay.classList.add("modal-overlay--show");
});

ProductButtonToys.addEventListener("click", function(evt) {
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
