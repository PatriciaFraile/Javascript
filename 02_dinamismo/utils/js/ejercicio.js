let boton = document.querySelector("#mensaje");

boton.addEventListener("click",(element)=>{
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let dni = document.getElementById("dni");
    let email = document.getElementById("email");
    if(!nombre.value || !apellido.value || !telefono.value || !dni.value || !email.value  ){
        alert(`Todos los campos son obligatorios`); 
        return false;
    }
});
