onload = inicio()

let db;

function inicio(){
  let openRequest = indexedDB.open("listaContactos",1);
  
  openRequest.onupgradeneeded = function() {
    let db1 = openRequest.result;
    
    //crear almacenes, claves, indices
    let contactos = db1.createObjectStore('contactos', {keyPath: "nombre"});
    //crear indices
    let indEmpresa = contactos.createIndex('empresa_ind', 'empresa');
  };

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
    guardaBD();
  };

  openRequest.onsuccess = function() {
    db = openRequest.result;
    console.log("Recogido evento success")
    //llamar a la funcion que guarda los contactos
    guardaBD();
  };
}

function guardaBD(){
    //crear los dos contactos
    contacto1 = {
        nombre: "Juan Garcia Lopez",
        empresa: "Repsol",
        cargo: "Director técnico",
        telefono: "555 234 654",
        correo: "juan.garcia@repsol.es"
      }

    contacto2 = {
        nombre: "Maria Perez Rodriguez",
        empresa: "Iberia",
        cargo: "Directora logística",
        telefono: "555 345 123",
        correo: "maria.perez@iberia.es"
      }

    // guardar el objeto en el almacen de la base de datos
    // para que posteriormente no salga un error al borrar y volver a recargar la pagina que no se crea el contacto borrado creo dos transacciones par aque si sale algun error no haya conflicto 

    //(1) crear la primera transaccion
    let transac = db.transaction("contactos", "readwrite");

    //(2) obtener el almacen
    let contacs = transac.objectStore("contactos"); 

    //(3) anadir al almacen el primer objeto
    let resultado1 = contacs.add(contacto1);

    //(1) crear la segunda transaccion
    let transac2 = db.transaction("contactos", "readwrite");

    //(2) obtener el almacen
    let contacs2 = transac2.objectStore("contactos"); 

  //(3) anadir al almacen el segundo objeto
    let resultado2 = contacs2.add(contacto2);


    //(4) gestionar los eventos (exito y error) con el resultado de la operacion (insercion)
    resultado1.onsuccess = function() { 
        console.log("Contacto 1 agregado al almacen", resultado1.result);
    };
    resultado1.onerror = function() {
        console.log("Error", resultado1.error);
    };

    resultado2.onsuccess = function() { 
        console.log("Contacto 2 agregado al almacen", resultado2.result);
    };
    resultado2.onerror = function() {
        console.log("Error", resultado2.error);
    };
    listarContactos()
}

function listarContactos(){
    //(1) crear una transaccion
    let transac = db.transaction("contactos", "readonly");

    //(2) obtener el almacen
    let contacs = transac.objectStore("contactos");

    //(3) recuperar todos los datos del almacen
    let salida = contacs.getAll();

    salida.onsuccess = function() {

        let tabla = $("#tabla");
        tabla.empty();
        let titulo = $("<tr><th>Nombre</th><th>Empresa</th><th>Cargo</th><th>Telefono</th><th>Correo</th><th>Borrar</th></tr>");
        tabla.append(titulo)

        //bucle que muestra los resultados de contacs.getAll()
        for(contac of salida.result){
            let nombre = contac.nombre;
            let empresa = contac.empresa;
            let cargo = contac.cargo;  
            let telefono = contac.telefono;
            let correo = contac.correo;
            
            
            let fila = $("<tr>")

            let celdaNombre = $("<td>").text(nombre);
            let celdaEmpresa = $("<td>").text(empresa)
            let celdaCargo = $("<td>").text(cargo)
            let celdaTelefono = $("<td>").text(telefono)
            let celdaCorreo = $("<td>").text(correo)
            let celdaBorrar = $("<td>")
            nombre = '"'+nombre+'"';
            //crear un boton con una funcion que almacene el nombre del contacto
            let btnBorrar = $("<input type='button' value='Borrar' onclick='BorrarContacto("+nombre+")'>");

            celdaBorrar.append(btnBorrar);


            fila.append(celdaNombre, celdaEmpresa, celdaCargo, celdaTelefono, celdaCorreo, celdaBorrar);

            
            
            tabla.append(fila);
        }
    }
}

function BorrarContacto(nombre){
    //(1) crear una transaccion
    let transac = db.transaction("contactos", "readwrite");

    //(2) obtener el almacen
    let contacs = transac.objectStore("contactos");

    //con el nombre proporcionado borrar el contacto ya que es la clave de la tabla
    contacs.delete(nombre);

    listarContactos();

}

