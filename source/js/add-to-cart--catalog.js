var ProductButtonBunny = document.querySelector(".catalog-card__btn--bunny");
var ProductButtonBasket = document.querySelector(".catalog-card__btn--basket");
var ProductButtonToys = document.querySelector(".catalog-card__btn--toys");
var addToCart = document.querySelector(".add-to-cart");
var substrate = document.querySelector(".substrate");


ProductButtonBunny.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCart.classList.add("add-to-cart--show");
  substrate.classList.add("substrate--show");
});

ProductButtonBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCart.classList.add("add-to-cart--show");
  substrate.classList.add("substrate--show");
});

ProductButtonToys.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCart.classList.add("add-to-cart--show");
  substrate.classList.add("substrate--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (addToCart.classList.contains("add-to-cart--show")) {
      evt.preventDefault();
      addToCart.classList.remove("add-to-cart--show");
      substrate.classList.remove("substrate--show");
    }
  }
});
