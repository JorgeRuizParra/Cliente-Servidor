onload = inicio()

let db;



function inicio(){
  let openRequest = indexedDB.open("ControlVisitas",1);
  
  openRequest.onupgradeneeded = function() {
    let db1 = openRequest.result;
    //crear almacenes, claves, indices
    //solo se puede aqui
    let entradas = db1.createObjectStore('entradas', {keyPath: 'dni'});
    let indEntradaApe = entradas.createIndex('apellidos_ind', 'apellidos');

    let salidas = db1.createObjectStore('salidas', {autoIncrement: true});
    let indSalidaDNI = salidas.createIndex('dni_ind', 'dni');
    let indSalidaApe = salidas.createIndex('apellidosSal_ind', 'apellidos');
  };

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  };

  openRequest.onsuccess = function() {
    db = openRequest.result;
    console.log("Recogido evento success")
    listarEntradas();
    listarSalidas();
  };
}


function guardaBD(){
  console.log("guardar en el almacen de objetos")
  if ($("#dni").val() == "" || $("#nombre").val() == "" || $("#apellidos").val() == "" || $("#contacto").val() == ""){
    return alert("Debes rellenar todos los campos");
  }
  
  //recuperar los datos
  //generar un objeto para guardar
  entrada = {
    dni: $("#dni").val(),
    nombre: $("#nombre").val(),
    apellidos: $("#apellidos").val(),
    contacto: $("#contacto").val(),
    fechaEntrada: new(Date),
  }


  // guardar el objeto en el almacen de la base de datos

  //(1) crear una transaccion
  let transac = db.transaction("entradas", "readwrite");

  //(2) obtener el almacen
  let entrs = transac.objectStore("entradas"); 

  //(3) aÃ±adir al almacen el objeto
  let resultado = entrs.add(entrada);

  //(4) gestionar los eventos (exito y error) con el resultado de la operacion (insercion)
  resultado.onsuccess = function() { 
    console.log("Entrada agregada al almacen", resultado.result);
  };
  resultado.onerror = function() {
    console.log("Error", resultado.error);
  };

  location.reload();
}

function listarEntradas(){
    //(1) crear una transaccion
    let transac = db.transaction("entradas", "readonly");

    //(2) obtener el almacen
    let entrs = transac.objectStore("entradas");

    //(3) recuperar todos los datos del almacen
    //let salida = lbrs.getAll(IDBKeyRange.bound("0", "1",true, false));
    let salida = entrs.getAll();

    salida.onsuccess = function() {
        let tabla = $("#entradas");
        let nFila = 0;

        for(entrada of salida.result){
            let nombre = entrada.nombre;
            let apellidos = entrada.apellidos;
            let dni = entrada.dni;
            let contacto = entrada.contacto;
            let fechaEntrada = entrada.fechaEntrada;
            
            let fila = $("<tr>");
            fila.attr("id","fila"+nFila);

            celdaNombre= $("<td>").text(nombre);

            fila.append(celdaNombre);

            celdaApellidos= $("<td>").text(apellidos);

            fila.append(celdaApellidos);

            celdaDNI= $("<td>").text(dni);

            fila.append(celdaDNI);

            celdaContacto= $("<td>").text(contacto);

            fila.append(celdaContacto);

            celdaFechEntr= $("<td>").text(fechaEntrada);

            fila.append(celdaFechEntr);

            celdaSal = $("<td id='campo"+nFila+"'>")
            console.log(entrada.dni)

            let btnRegSalida = $("<button onclick='mover("+"\""+nombre+"\",\""+apellidos+"\",\""+dni+"\",\""+contacto+"\",\""+fechaEntrada+"\","+nFila+")'>")
            btnRegSalida.addClass("btnRegSal")
            btnRegSalida.text("→")

            celdaSal.append(btnRegSalida);

            fila.append(celdaSal);

            tabla.append(fila);
            nFila++;
        }
    }
    /*
    let res = entrs.getKey("0");

    res.onsuccess = function() {
        console.log(res.result);
    }

    let ti = entrs.index("titulo_ind") //busco el indice en el almacen

    let res1 = ti.getKey("libro 1") //ejecuto la consulta sobre el indice, devuelve las claves

    res1.onsuccess = function() {
        for (keylibro of res1.result){ //recorro el resultado
            console.log(lbrs.get(keylibro));
        }
    }
    */
}

function mover(nombre,apellidos,dni,contacto,fechaEntrada,nFila){
  guardaSalida(nombre,apellidos,dni,contacto,fechaEntrada);
  borrarEntrada(dni);
  moverFila(nFila)
}

function borrarEntrada(dni){

  // (1) Crear una transacción en modo 'readwrite'
  let transac = db.transaction("entradas", "readwrite");

  // (2) Obtener el almacén (objectStore)
  let entrs = transac.objectStore("entradas");

  // (3) Recuperar la clave (id) mediante la clave primaria (DNI)
  let request = entrs.getKey(dni);

  request.onsuccess = function() {
    let id = request.result;
    let deleteRequest = entrs.delete(id);
  };
}

function guardaSalida(nombre,apellidos,dni,contacto,fechaEntrada){
    console.log("guardar en el almacen de objetos")
  
  //recuperar los datos
  //generar un objeto para guardar
  salida = {
    dni: dni,
    nombre: nombre,
    apellidos: apellidos,
    contacto: contacto,
    fechaEntrada: fechaEntrada,
    fechaSalida: new(Date),
  }


  // guardar el objeto en el almacen de la base de datos

  //(1) crear una transaccion
  let transac2 = db.transaction("salidas", "readwrite");

  //(2) obtener el almacen
  let sals = transac2.objectStore("salidas"); 

  //(3) aÃ±adir al almacen el objeto
  let resultado = sals.add(salida);

  //(4) gestionar los eventos (exito y error) con el resultado de la operacion (insercion)
  resultado.onsuccess = function() { 
    console.log("Salida agregada al almacen", resultado.result);
  };
  resultado.onerror = function() {
    console.log("Error", resultado.error);
  };
}

function listarSalidas(){
    //(1) crear una transaccion
    let transac = db.transaction("salidas", "readonly");

    //(2) obtener el almacen
    let sals = transac.objectStore("salidas");

    //(3) recuperar todos los datos del almacen
    //let salida = lbrs.getAll(IDBKeyRange.bound("0", "1",true, false));
    let salida = sals.getAll();

    salida.onsuccess = function() {
        let tabla = $("#salidas");

        for(salida of salida.result){
            let fila = $("<tr>");

            celdaNombre= $("<td>").text(salida.nombre);

            fila.append(celdaNombre);

            celdaApellidos= $("<td>").text(salida.apellidos);

            fila.append(celdaApellidos);

            celdaDNI= $("<td>").text(salida.dni);

            fila.append(celdaDNI);

            celdaContacto= $("<td>").text(salida.contacto);

            fila.append(celdaContacto);

            celdaFechEntr= $("<td>").text(salida.fechaEntrada);

            fila.append(celdaFechEntr);

            celdaFechSal= $("<td>").text(salida.fechaSalida);

            fila.append(celdaFechSal);

            tabla.append(fila);

        }
    }
    /*
    let res = entrs.getKey("0");

    res.onsuccess = function() {
        console.log(res.result);
    }

    let ti = entrs.index("titulo_ind") //busco el indice en el almacen

    let res1 = ti.getKey("libro 1") //ejecuto la consulta sobre el indice, devuelve las claves

    res1.onsuccess = function() {
        for (keylibro of res1.result){ //recorro el resultado
            console.log(lbrs.get(keylibro));
        }
    }
    */
}

function filtros(idInput,columna,tabla){
  
  // Obtén el valor de búsqueda
  let filter = $("#"+idInput).val().toUpperCase();
  let tr =  $("#"+tabla).find("tr");
  let td, txtValue;

  // Recorre todas las filas y oculta aquellas que no coincidan con el filtro de búsqueda
  for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[columna]; // 0 representa la primera columna, ajusta según tus necesidades
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

function limpiar(){
  $("#dni").val("")
  $("#nombre").val("")
  $("#apellidos").val("")
  $("#contacto").val("")
}

function moverFila(nFila){
  let fechaSalida = new(Date);

  let filaAmover = $("#fila"+nFila);

  $("#salidas").append(filaAmover)

  let campoMover = $("#campo"+nFila);
  campoMover.text(fechaSalida);
}