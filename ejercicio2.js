function nave(clave)
{
    const result = clave.split(':');
    document.write("Piloto: "+result[1]);
}

let nave2 = (clave)=>
{
    let result = clave.split(':');
    document.write("Piloto: "+result[1]);
}

var clave = prompt('Ingresa el codigo: ');

nave(clave);
document.write("<br><br>");
nave2(clave);

