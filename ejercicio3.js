let temMin = parseFloat(prompt("Ingrese la temperatura mínima del dia: "));
let temMax = parseFloat(prompt("Ingrese la temperadura máxima del día: "));

function obtenerMedia(min, max)
{
    let suma = min + max;
    return suma / 2;
}

let media = obtenerMedia(temMin, temMax);
let media2 = (min, max)=> (temMin+temMax)/2;

document.write("La temperatura media es: "+media+"<br><br>");
document.write("La temperatura media es: "+media2(temMin, temMax));