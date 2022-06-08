/* let frase = "Esto es un ejemplo de string";
frase = frase.replaceAll(" ", "");
console.log(frase);
let vocales = 0,
  consonantes = 0;
for (let index = 0; index < frase.length; index++) {
  if (
    frase.charAt(index).toLowerCase() == "a" ||
    frase.charAt(index).toLowerCase() == "e" ||
    frase.charAt(index).toLowerCase() == "i" ||
    frase.charAt(index).toLowerCase() == "o" ||
    frase.charAt(index).toLowerCase() == "u"
  ) {
    vocales++;
  } else {
    consonantes++;
  }
}
alert(
  `El numero de vocales es ${vocales} y el de consonantes es ${consonantes}`
); */
/*let frase = "Esto es un ejemplo de frase para analizar";
let estaLetra = frase.includes("E");
let subfrase = frase.slice(0,5);*/
let frase = prompt("Escribe un correo");
let numeroArrobas = 0
let posicionArroba = 0;
for (let index = 0; index < frase.length; index++) {
    if(frase.charAt(index)=="@"){
        numeroArrobas++;
        posicionArroba = index;
    }    
}
console.log(numeroArrobas);

if(numeroArrobas==1){
    let dominio = frase.slice(posicionArroba + 1,frase.length);
    console.log(dominio);
}else{
    alert(`No valido`);
    
}
console.log("Con el for");

let numeroPuntos = 0;
let posicionPuntos = 0;
for (let index = 0; index < frase.length; index++) {
    if(frase.charAt(index)== "."){
        numeroPuntos++;
        posicionPuntos = index;
    }
}
console.log(numeroPuntos);

if (numeroPuntos==1){
    let dominio = frase.slice(posicionPuntos + 1 , frase.length);
    console.log(dominio);
}else{
    alert(`No valido`)
}

console.log("Con el split");
let partesCorreo = frase.split("@");
if(partesCorreo.length==2){
    let dominio = partesCorreo[1].split('.');
    if(dominio.length==2 && (dominio[1]=="es"|| dominio[1]=="com")){
        console.log("correo valido");
    }else{
        console.log("correo invalido");
        
    }
}else{
    console.log("correo invalido");
}

