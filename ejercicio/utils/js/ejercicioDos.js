let colorR = document.querySelector("#r");
let colorG = document.querySelector("#g");
let colorB = document.querySelector("#b");
let frase = document.querySelector("#rgb");
let parrafo = document.querySelector("#parrafo_color");
let valorR = colorR.value;
let valorG = colorG.value;
let valorB = colorB.value;

colorR.addEventListener("change", () =>{
    actualizarColores();
})
colorG.addEventListener("change", () =>{
    actualizarColores();
})
colorB.addEventListener("change", () =>{
    actualizarColores();
})
function actualizarColores() {
    let texto = (` El color es : rgb(${colorR.value}/${colorG.value}/${colorB.value})`);
    frase.innerText = texto;
    parrafo.setAttribute('style',`background-color : ${texto}`)
}

console.log(colorR);
console.log(colorG);
console.log(colorB);




