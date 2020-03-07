const burguer = document.getElementById("burguer");
const menu = document.getElementById("menu");

burguer.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

new Glide(".glide", {
  perTouch: 1,
  keyboard: true,
  gap: 32
}).mount();

new Glide(".second__slide", {
  perTouch: 1,
  gap: 40,
  startAt: 0
}).mount();

// NAVBAR CONTROLLER BELOW
