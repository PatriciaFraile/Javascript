let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
let pulsar = document.querySelector("span");
let contador = 0;

console.log("1 TIPO");

boton_agregar.addEventListener("click", function () {
    console.log("Pulsar Elemento");
    
});
console.log("2 TIPO");

boton_agregar.addEventListener("click",  ()=> {
    console.log("Pulsar Elemento");
    
});
console.log("3 TIPO");

boton_agregar.addEventListener("click", pulsarElemento);

function pulsarElemento() {
    console.log("Pulsar Elemento");    
}


input_agregar.addEventListener("keydown" ,(event) =>{
    console.log(event.key);
});

input_agregar.addEventListener("keyup" , (event) => {
        contador++;
        pulsar.innerText = contador;  
});



//declarar la funcion fuera (va a ser reutilizada)
// o dentro (solo ejecutada por el evento) --> anónima

