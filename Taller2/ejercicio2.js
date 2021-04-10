function robarPlanos(idPlano, despegar)
{
    if(idPlano > 0 && idPlano < 11)
    {
        let mensaje = "El plano robado fue: "+idPlano;
        despegar(null, mensaje);
    }
    else
    {
        let error = "El plano robado no es real";
        despegar(error, null);
    }
}

robarPlanos(5, function(error, mensaje){
    if(error)
    {
        console.log(error);
        console.log("Seguimos en el planeta!!")
    }
    else
    {
       console.log(mensaje); 
       console.log("Estamos despegando");
    }
});