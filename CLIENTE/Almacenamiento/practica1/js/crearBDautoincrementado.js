let dbai;

let openRequestai = indexedDB.open("BDAutoIncrementada", 1);

openRequestai.onupgradeneeded = function() {
    let db1 = openRequestai.result;
    //crear almacenes, claves, indices
    //solo se puede aquí
    db1.createObjectStore('libros', {autoIncrement: true});
}

openRequestai.onerror = function(){
    console.log("Error: "+openRequest.error);
}

openRequestai.onsuccess = function(){
    dbai = openRequestai.result;
    console.log("Recogido evento success");
}

function guardaBDautoIncrementada(){
    console.log("guardar en el almacen de objetos")

    //recuperar los datos
    //generar un objeto para guardar
    libro = {
        id: document.getElementById("idai").value,
        titulo: document.getElementById("tituloai").value,
        autor: document.getElementById("autorai").value,
        tipo: document.getElementById("tipoai").value,
    }

    console.log(libro);
    
    //guardar el objeto en el almacen de la base de datos


    //(1) crear una transaccion
    let transac = dbai.transaction("libros", "readwrite");

    //(2) obtener el almacen
    let lbrs = transac.objectStore("libros");

    //(3) añadir al almacen el objeto
    let resultado = lbrs.add(libro);

    //(4) gestionar los eventos (exito y error) con el resultado de la operación (inserción)
    resultado.onsuccess = function() {
        console.log("Libro agregado al almacén");
    }

    resultado.onerror = function() {
        console.log("Libro agregado al almacén");
    }
}