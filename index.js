const titulo=document.querySelector("h1");
const CAMBIAR_COLOR=document.querySelector("#cambiarcolor");
const nombreInput=document.querySelector("#nombre");
const apellidoInput=document.querySelector("#apellido");
const enviar =document.querySelector("#enviar");

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

    function confirmar() {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const usuario = `${nombre} ${apellido}`; // Concatena el nombre y el apellido con un espacio
        localStorage.setItem("usuario", usuario); // Guarda el valor en el localStorage
    }
    
    // Añadimos un evento 'click' al botón enviar para que llame a la función confirmar
    enviar.addEventListener('click', confirmar);