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
/*let intro = prompt("Introudce un dato a trabajar", "Parametro por trabajar");
console.log(intro);*/

/*
ejercicio
*/
nombre = "Paula";
apellido = "Gómez";
let num1 = prompt(`Introduce un numero`);
let num2 = prompt (`Introduce un numero`);

let confirmacion = confirm(`${nombre} ${apellido} estas seguro de hacer esta operacion?`);
if(confirmacion){
    let sum = Number(num1)+ Number(num2);
    let rest = num1-num2;
    let mul = num1*num2;
    let div = num1/num2;
    let mod = num1%num2;
    alert(`Las operaciones entre ${num1} y ${num2} son :
        suma : ${sum}
        resta : ${rest}
        multiplicacion ; ${mul}
        division : ${div}
        modulo : ${mod}`);
}else{
    alert(`${nombre} hasta la proxima`)
}













