const menu = document.querySelector(".sidebar");
const abrir = document.querySelector(".toggle_abrir");
const fechar = document.querySelector(".toggle_fechar");

abrir.addEventListener("click", () => {
    menu.classList.add("ativo");
});

fechar.addEventListener("click", () => {
    menu.classList.remove("ativo");
});