/*funcionalidad slider*/

const sigInt = document.getElementById("sigueinteIntegrante");
const antInt = document.getElementById("anteriorIntegrante");

let sliderIntegrantes = document.querySelector(".slider--integrantes");
let cantidadIntegrantes = document.querySelectorAll(".integrantes")
let index = 1
let porcentaje = -0

sigInt.addEventListener("click", () => {
    porcentaje = index * -350;
    sliderIntegrantes.style.transform = "translateX(" + porcentaje + "px)";
    index++;

    if (index > cantidadIntegrantes.length - 1) {
        index = 0;
    };
    console.log(porcentaje)
})

antInt.addEventListener("click", () => {

    if (porcentaje == -0) { }
    else {
        porcentaje = porcentaje - (-350)
        index = index - 1
        sliderIntegrantes.style.transform = "translateX(" + porcentaje + "px)";
    }

})























