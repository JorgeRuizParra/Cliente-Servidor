function mostrarContenido(t){
    //leer el valor de los dos inputs
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;

    //dos if en los cuales se comprueba si el id del input es igual al que se le pasa a la funcion muestra el alert
    if (t == "texto1"){
        alert("El contenido del campo "+t+" ha cambiado a: "+texto1)
    }
    if (t == "texto2"){
        alert("El contenido del campo "+t+" ha cambiado a: "+texto2)
    }
}