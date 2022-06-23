let nombreJugador = prompt("introduce tu género (M/H)");
if(nombreJugador== "M"){
    let genero = "usuaria";
    document.querySelector("#container span").innerText = genero;
}else{
    let genero = "usuario";
    document.querySelector("#container span").innerText = genero;
}