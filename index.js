const titulo=document.querySelector("h1");
const CAMBIAR_COLOR=document.querySelector("#cambiarcolor");
const nombreInput=document.querySelector("#nombre");
const apellidoInput=document.querySelector("#apellido");

const cambiarColor=function(){
    titulo.classList.add("color");
}
CAMBIAR_COLOR.addEventListener("click",cambiarColor);

function actualizarTitulo() {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    titulo.textContent = `Bienvenido ${nombre} ${apellido}`;
}

    nombreInput.addEventListener('keyup', actualizarTitulo); 
    apellidoInput.addEventListener('keyup', actualizarTitulo);
    ''