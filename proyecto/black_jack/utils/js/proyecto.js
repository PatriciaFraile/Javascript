let baraja = [];
let boton = document.querySelector("#mensaje");
let nombre = document.querySelector("#nombre")

boton.addEventListener("click",(element)=>{
  let nombreUsuario = document.getElementById("nombre");
  if(!nombreUsuario.value){
    alert("Es obligatorio el nombre del usuario");
  }else{
    
  }
});


function iniciarBaraja() {
  let palos = ["T", "C", "D", "P"];

  for (let index = 0; index < palos.length; index++) {
    for (let index2 = 1; index2 < 14; index2++) {
      if (index2 == 11) {
        baraja.push("J" + palos[index]);
      } else if (index2 == 12) {
        baraja.push("Q" + palos[index]);
      } else if (index2 == 13) {
        baraja.push("K" + palos[index]);
      } else {
        baraja.push(index2 + palos[index]);
      }
    }
  }
}

function mostrarBaraja() {
  console.log(baraja);
}

iniciarBaraja();
//remueve el array
baraja = _.shuffle(baraja);
mostrarBaraja();

let aleatorio = Number(Math.random()*52);

function calcularValor (carta) {
    return carta.substring(0,carta.length-1);   
}
console.log(calcularValor(baraja.pop[parseInt(Math.random*53)]));
