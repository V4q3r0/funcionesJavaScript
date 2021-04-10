function crearPandawan(nombre, planeta, edad, estatura){
    let pandawan = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    return pandawan;
}

let pandawan1 = crearPandawan('LUKE', 'Marte', 18, 1.81);
let pandawan2 = crearPandawan('GREGOR', 'Estrella Oscura', 14, 1.92);

function asignarActividad(pandawan, asignar)
{
    if(pandawan.edad < 15)
    {
        let actividad = 'Manejo de la fuerza';
        asignar(null, actividad, pandawan);
    }
    else if(pandawan.edad >= 15)
        {
            let actividad = 'Manejo del sable de luz';
            asignar(actividad, null, pandawan);
        }
}

asignarActividad(pandawan1, function(fuerza, luz, pandawan){
    if(fuerza)
    {
        console.log('El pandawan '+pandawan.nombre+' le fue asignada la actividad de: '+fuerza);
    }
    else{
        console.log('El pandawan '+pandawan.nombre+' le fue asignada la actividad de: '+luz);
    }
})

asignarActividad(pandawan2, function(fuerza, luz, pandawan){
    if(fuerza)
    {
        console.log('El pandawan '+pandawan.nombre+' le fue asignada la actividad de: '+fuerza);
    }
    else{
        console.log('El pandawan '+pandawan.nombre+' le fue asignada la actividad de: '+luz);
    }
})