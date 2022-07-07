/* ======================== Abrir Menú de Opciones ======================== */
const styleSwitchToggle = document.querySelector(".style-switcher-toggler");
styleSwitchToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/* ======================== Cambiar Colores del Tema ======================== */
const alternateStyles = document.querySelectorAll(".alternate-style-par");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.toggleAttribute("disabled");
        }
    })
}
const alternateStyles2 = document.querySelectorAll(".alternate-style-impar");
function setActiveStyle2(color){
    alternateStyles2.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.toggleAttribute("disabled");
        }
    })
}
/* ======================== Modo oscuro ======================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})