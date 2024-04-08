let caja = document.querySelector(".contenedor-caja"),
cuerpo = document.querySelector('body'),
inputBorder = document.querySelector(".inputBorder"),
inputColor = document.querySelector(".inputColor"),
dark = document.querySelector('.Dark');

let darkMode = () => {
    cuerpo.classList.add('modo-dark')
};
let lightMode = () => {
    cuerpo.classList.remove('modo-dark')
};



inputBorder.addEventListener("input", () => {
    caja.style.borderRadius = inputBorder.value;
});

inputColor.addEventListener("input", () => {
    caja.style.background = inputColor.value;
    caja.style.borderColor = inputColor.value;
});

