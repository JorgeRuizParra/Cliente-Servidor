let db;

let openRequest = indexedDB.open("miBaseDeDatos",1);

openRequest.onupgradeneeded = function() {
    let db1 = openRequest.result;
    //crear almacenes, claves, indices
    //solo se puede aqui
    let libros = db1.createObjectStore('libros', {keyPath: 'id'});
    let indTitulo = libros.createIndex('titulo_ind', 'titulo');
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
  db = openRequest.result;
  console.log("Recogido evento success")
};

function guardaBD(){
  console.log("guardar en el almacen de objetos")
  
  //recuperar los datos
  //generar un objeto para guardar
  libro = {
    id: document.getElementById("id").value,
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    tipo: document.getElementById("tipo").value
  }


  // guardar el objeto en el almacen de la base de datos

  //(1) crear una transaccion
  let transac = db.transaction("libros", "readwrite");

  //(2) obtener el almacen
  let lbrs = transac.objectStore("libros"); 

  //(3) aÃ±adir al almacen el objeto
  let resultado = lbrs.add(libro);

  //(4) gestionar los eventos (exito y error) con el resultado de la operacion (insercion)
  resultado.onsuccess = function() { 
    console.log("Libro agregado al almacen", resultado.result);
  };
  resultado.onerror = function() {
    console.log("Error", resultado.error);
  };

  
}