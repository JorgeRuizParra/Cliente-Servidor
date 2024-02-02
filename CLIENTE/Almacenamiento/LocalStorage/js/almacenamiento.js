function guardar(){
    let datos = new Map();

    datos.set("datoTexto",$(datoTexto).val())//crea una clave con un valor
    datos.set("datoNumero",$(datoNumero).val())
    datos.set("datoEmail",$(datoEmail).val())
    datos.set("datoFecha",$(datoFecha).val())
    datos.set("datoColor",$(datoColor).val())

    let miMapa = JSON.stringify(Array.from(datos.entries()))

    localStorage.setItem("miMapa", miMapa)
}

function borrar(){
    let clave = prompt("¿?");
    localStorage.removeItem(clave);// borra la clave seleccionada
}

function recuperar(){
    console.log(localStorage.getItem("clave1"));
    if(localStorage.getItem("miMapa")){
        let datosArray = JSON.parse(localStorage.getItem("miMapa"));
        let datosRecuperados = new Map(datosArray);

        console.log(datosRecuperados);
    }else{
        alert("No existe")
    }
}