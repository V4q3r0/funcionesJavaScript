let xini = prompt("Escriba la coordenada X inicial: ");
let xfin = prompt("Escriba la coordenada X final: ");
let yini = prompt("Escriba la coordenada Y inicial: ");
let yfin = prompt("Escriba la coordenada Y final: ");

function calcularDistancia(xini, xfin, yini, yfin)
{
    return Math.sqrt((Math.pow(xfin-xini, 2))+(Math.pow(yfin-yini, 2)));
}

let distancia = calcularDistancia(xini, xfin, yini, yfin);

let distancia2 = (xini, xfin, yini, yfin)=>Math.sqrt((Math.pow(xfin-xini, 2))+(Math.pow(yfin-yini, 2)));

document.write("La distancia es: "+distancia+"<br><br>");
document.write("La distancia es: "+distancia2(xini, xfin, yini, yfin));



