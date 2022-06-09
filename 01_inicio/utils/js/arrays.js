/*let elementos =[1,2,4,5,6,7]; //number
let cosas = [1,2,3,4,"madrid", false]; //any*/
/*
//acceder posicion
console.log(equipos[0]);
equipos[0] = "leganes";
console.log(equipos);
console.log(equipos.length);
//agregar en la ultima posicion
equipos[equipos.length] = "cadiz";
console.log(equipos);
//metodo push se añade al final del arraylist
console.log(equipos.push("leganes","alcorcon","cadiz"));
console.log(equipos);
//metodo pop para quitar
console.log(equipos.pop());
console.log(equipos);
//unshift insertar un nuevo elemento al principio 
console.log(equipos.unshift("leganes","alcorcon","cadiz"));
console.log(equipos);
//shift quita el primer elemento
console.log(equipos.shift());
console.log(equipos);

//filter ---> filtrar por x posicion
//elimina
let equipos = ["madrid","barsa","sevilla","atletico","getafe"]; //string
equipos = equipos.filter((item) => {
    item != "sevilla"
});
console.log(equipos);
*/
let numeros = [1,2,3,4,5,6,7,8,9,10];
//mostrar los elementos de un array
let i = 0;
while(i<numeros.length){
    console.log(numeros[i]);
    i++;
}
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);    
}
numeros.forEach(element => {
    console.log(element);  
});

while(i<numeros.length){
    console.log(numeros[i]+1);
    i++;
}
let suma = 0

numeros.forEach(element => {
    suma+=element 
});
console.log("la media es" + suma/numeros.length);

let arrayAleatorio=[];
for (let index = 0; index < 20; index++) {
    arrayAleatorio[index]= Math.random();    
}
arrayAleatorio.forEach(element => {
    console.log(element);
    
});





