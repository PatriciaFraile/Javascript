let frase = "Esto es un ejemplo de String";
console.log(frase.charAt(0).toLowerCase());
let consonantes;
let vocales = ["a","e","i","o","u"]
let contador;
for (let index = 0; index < frase.length; index++) {
    if(frase.charAt(index)==vocales){
        console.log(index);
        
    }  

}
