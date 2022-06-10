//HTMLElement --> individual (1) find ()
// NodeList <HTMLElement --> conjunto (1 o más) findAll

//buscar elementos : 
//tag
//let listas = document.getElementsByTagName("ul");
let elementosLista = document.getElementsByTagName("li");
/*console.log(listas);
elementosLista[0].innerText = "Modificacion de la propiedad"
//innerText el contenido del li
console.log(elementosLista[0].innerText);
for (let index = 0; index < elementosLista.length; index++) {
    console.log(elementosLista[index].innerText);
    index++;   
}*/
let listar = ["Matemáticas","Historia", "Fisica","Biología","Lengua"];

/*setTimeout(() => {
    for (let index = 0; index < listar.length; index++) {
        elementosLista[index].innerText= listar[index];
    }
}, 5000);*/
/*setInterval(() => {
    console.log("Ejecución repetiva");
    
}, 2000);
*/
//class
let asignaturasSegundo = document.getElementsByClassName("list-group-item");
console.log(asignaturasSegundo);
//id
let boton = document.getElementById("boton_agregar");
console.log(boton);



