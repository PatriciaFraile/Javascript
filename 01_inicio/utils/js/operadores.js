//suma
let numero1 = 6;
let numero2  =10;
//let suma = numero1 + numero2;
//console.log(suma);
console.log(`La suma de los numeros es ${numero1 + numero2}`);
console.log(`La resta de los numeros es ${numero1 - numero2}`);
console.log(`La multiplicacion de los numeros es ${numero1 * numero2}`);
console.log(`La division de los numeros es ${numero1 / numero2}`);
console.log(`La modulo de los numeros es ${numero1 % numero2}`);

console.log(`El tipo de resto es ${typeof (numero1 %numero2)}`);

let suma = numero1 + numero2;
suma += 10; //resultado le sumas 10

//operadores comparacion

let numero3 = 12;
let numero4 = 10;
let mayorQue = numero3>numero4;
console.log(mayorQue);
let mayorIgual = numero3>=numero4;
console.log(mayorIgual);
let menorQue = numero3<numero4;
console.log(menorQue);
let menorIgual = numero3<=numero4;
console.log(menorIgual);
let diferente = numero3!=numero4;
console.log(diferente);
let igual = numero3==numero4;
console.log(igual);
numero3 = "12";
numero4 = 12;
let igual3 = numero3 === numero4;
console.log(igual3);

// informar al usuario mediante un mensaje
//alert(`Bienvenido ${nombre}`);
//let confirmacion = confirm("Seguro que quieres continuar?");
//console.log(confirmacion);
let intro = prompt("Introudce un dato a trabajar", "Parametro por trabajar");
console.log(intro);







