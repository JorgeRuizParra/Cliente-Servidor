function creaTabla() {

	let filas = Number(document.getElementById("filas").value);
	let columnas = Number(document.getElementById("columnas").value;
	let color = document.getElementById("color").value;
	let borde = document.getElementById("borde").checked;

	//valores obtenidos de los parametros
	console.log(filas);
	console.log(columnas);
	console.log(borde);
	console.log(color);

	let divTabla = document.getElementById('resultado');

	divTabla.firtsChild.remove();

	let tabla = document.createElement('table');
	let tbody = document.createElement('tbody');

	tabla.appendChild(tbody);
	divTabla.appendChild(tabla);

	if (borde) {
		tabla.style.border = "5px solid "+color;
	}

	for (var i = filas.length - 1; i >= 0; i--) {
		let tr = document.createElement('tr');
		if (borde) {
			tr.style.border = "3px solid "+color;
		}
		tbody.appendChild(tr);
		for (var j = columnas.length - 1; j >= 0; j--) {
			let td = document.createElement('td');

			if (borde) {
				td.style.border = "1px solid "+color;
			}
			td.innerHTML = i+'-'+j;

			tr.appendChild(td);
		}
		
	}
}