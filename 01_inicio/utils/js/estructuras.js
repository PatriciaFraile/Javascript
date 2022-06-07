// if if else switch while do while for foreach(especial) for of for on break goto

//let acierto = false

//if if else 

/*if(true){
    console.log("La respuesta es true");
    
}else{
    console.log("La respuesta es falsa");
    
}*/

/*
//if ternario
acierto ? console.log("aprobado"): console.log("falso");
//if                                             else
acierto & console.log("examen aprobado");
//if
*/

/*let nota = 6;
switch (nota) {
    case 1:
        console.log("Dato introducido 1"); 
        break;
    case 2:
        console.log("Dato introducido 2"); 
        break;

    default:
        console.log("Dato incorrecto");
        
        break;
}
*/
/*let num1 = prompt(`Introduce un numero`);
let num2 = prompt (`Introduce un numero`);
if(isNaN(Number(num1)) && isNaN (Number(num2)) && num1<0 && num2 <0){
    alert(`No se puede continuar`)
}else{
    let operaciones = prompt ('Escribe el tipo de operacion');
    let resultado;
    switch (operaciones) {
        case "suma":
            resultado = Number(num1)+ Number(num2)
            alert(`La suma entre ${num1} y ${num2} es ${resultado}`)
            break;
        case "resta":
            resultado = num1-num2;
            alert(`La resta entre ${num1} y ${num2} es ${resultado}`)

            break;
        case "multiplicacion":
            alert(`La multiplicacion entre ${num1} y ${num2} es ${num1*num2}`)
            break;
        case "division":
            alert(`La division entre ${num1} y ${num2} es ${num1/num2}`)
            break;
        default:
            alert(`No se puede realizar ninguna operacion`)
            break;
    }

}
*/
/*let num = prompt(`Escribe un numero`)
if(!isNaN(Number(num))){
while(num>0){
    console.log(num);
    if(num<0){
        alert(`Numero negativo`)
    }
    
    num--;    
}
}
let numeroUno= prompt(`Introduce un numero`);
let numeroDos = prompt(`Introduce un numero`);
let max , min ;
if (numeroDos>numeroUno){
    max = numeroDos;
    min = numeroUno;
}else if(numeroDos<numeroUno){
    max = numeroUno;
    min = numeroDos;
}else{
    alert(`No se puede`)
}
while (max>min){
    console.log(max);
    max--;
    
}
*/
let numeros = [1,2,3,4,5,6,7,45];
//let num = [1,2,false,"8"] //any
/*for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
        
}*/
let posicion = 0;
numeros.forEach(element => {
   if(element % 2 == 0){
     console.log(element); 
   } 
   posicion++;
});


