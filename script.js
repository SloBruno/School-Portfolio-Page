const hamburguer = document.querySelector(".hamburguer");
const home = document.querySelector("#options");

home.addEventListener('mouseover', () => {
    hamburguer.style.display = "flex";
});

hamburguer.addEventListener('mouseleave', () => {
    hamburguer.style.display = "none";
});
