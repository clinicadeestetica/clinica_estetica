const menu = document.querySelector(".menu");
const abrir = document.querySelector(".menu-icon");
const fechar = document.querySelector(".fechar");

abrir.addEventListener("click", function(){
    menu.classList.add("ativo");
});

fechar.addEventListener("click", function(){
    menu.classList.remove("ativo");
});