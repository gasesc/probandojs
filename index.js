const titulo=document.querySelector("h1");
const CAMBIAR_COLOR=document.querySelector("#cambiarcolor");

const cambiarColor=function(){
    titulo.classList.add("color");
}
CAMBIAR_COLOR.addEventListener("click",cambiarColor);