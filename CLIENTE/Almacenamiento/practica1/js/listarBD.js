let db;

let openRequest = indexedDB.open("miBaseDeDatos", 1);

openRequest.onupgradeneeded = function() {
    let db1 = openRequest.result;
    //crear almacenes, claves, indices
    //solo se puede aquí
    db1.createObjectStore('libros', {keyPath: 'id'});
}

openRequest.onerror = function(){
    console.log("Error: "+openRequest.error);
}

openRequest.onsuccess = function(){
    db = openRequest.result;
    console.log("Recogido evento success");
    listar();
}

function listar(){
    //(1) crear una transaccion
    let transac = db.transaction("libros", "readonly");

    //(2) obtener el almacen
    let lbrs = transac.objectStore("libros");

    //(3) recuperar todos los datos del almacen
    //let salida = lbrs.getAll(IDBKeyRange.bound("0", "1",true, false));
    let salida = lbrs.getAll();

    salida.onsuccess = function() {
        let tabla = document.getElementById("salida");

        for(libro of salida.result){
            let fila = document.createElement("tr");
            let celdaId = document.createElement("td");
            celdaId.appendChild(document.createTextNode(libro.id));

            fila.appendChild(celdaId);

            let celdaTitulo = document.createElement("td");
            celdaTitulo.appendChild(document.createTextNode(libro.titulo))

            fila.appendChild(celdaTitulo);

            let celdaAutor = document.createElement("td");
            celdaAutor.appendChild(document.createTextNode(libro.autor))

            fila.appendChild(celdaAutor);

            let celdaTipo = document.createElement("td");
            celdaTipo.appendChild(document.createTextNode(libro.tipo))

            fila.appendChild(celdaTipo);

            tabla.appendChild(fila)

        }
    }

    let res = lbrs.getKey("0");

    res.onsuccess = function() {
        console.log(res.result);
    }

    let ti = lbrs.index("titulo_ind") //busco el indice en el almacen

    let res1 = ti.getKey("libro 1") //ejecuto la consulta sobre el indice, devuelve las claves

    res1.onsuccess = function() {
        for (keylibro of res1.result){ //recorro el resultado
            console.log(lbrs.get(keylibro));
        }
    }
}