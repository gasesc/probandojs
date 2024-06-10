const usuarioRecuperado=localStorage.getItem("usuario");
const cuerpo=document.querySelector("body")
if(usuarioRecuperado!=null){
    let titulo = document.createElement("h1");
    titulo.textContent=`${usuarioRecuperado}`;
    titulo.classList.add("texto")
    const contenedor=document.createElement("div");
    contenedor.classList.add("contenedor");
    contenedor.appendChild(titulo);
    cuerpo.appendChild(contenedor);

}else{
    console.log("esta vacio")
}