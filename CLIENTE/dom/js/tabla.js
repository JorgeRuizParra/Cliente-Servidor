onload=creaTabla;

let cuerpo;

function creaTabla() {

	//obtener el elemento body del DOM
	//document.getElementsByTagName("body") devuelve un array con todos los elementos body
	//body solo hay uno y esta en la posicion 0
	cuerpo = document.getElementsByTagName("body")[0];	

	let tabla = "<table id='tablaCreada'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>"

	cuerpo.innerHTML = tabla;

	let tablaCreada = document.getElementById("tablaCreada");

	console.log(tablaCreada);

	//crear elementos
	let fila = document.createElement("tr");
	let celda1 = document.createElement("td");
	let celda2 = document.createElement("td");
	let celda3 = document.createElement("td");

	//rellenar los elementos celda con su contenido
	celda1.innerHTML="7";
	celda2.innerHTML="8";
	celda3.innerHTML="9";

	//añadir las celdas a la fila
	fila.appendChild(celda1);
	fila.appendChild(celda2);
	fila.appendChild(celda3);

	//añadir la fila a la tabla
	tablaCreada.appendChild(fila);
}
