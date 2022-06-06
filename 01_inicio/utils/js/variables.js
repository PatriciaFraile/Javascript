console.log('Variables cargado');
//let --> ámbito global y de clase
//var --> ámbito global --> no se utiliza
//const -- > constantes

const DNI = "1234XSJO";
let nombre = "Borja";
let apellido ; //null --> undefined
let edad = 37; //number
let fecha =  new Date (); //Date --> object
apellido = "Martin"; //String 
let nombreObj = new String ("Elemento");

//comprobación de tipos
typeof nombre ; //tipo de nombre
console.log(typeof nombreObj);
console.log(isNaN(nombre));

//salida por consola
console.log("Mi nombre es "+ nombre +" mi edad es "+ edad);
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);


