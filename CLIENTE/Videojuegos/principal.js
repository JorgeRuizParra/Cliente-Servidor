onload=principal;
let tbodyDatos;

function principal(){
	tbodyDatos = document.getElementById("tablaDatos");
	tbodyDatos.innerHTML= "";
	traerDatosServidor();
	//conectarse por ajax al servidor, pedir los datos de videojuegos y rellenar la tabla
}

function traerDatosServidor() {
	const httprq = new XMLHttpRequest();

	//resolver la respuesta
	httprq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);

			let datos = JSON.parse(this.responseText);
			creaFilas(datos);
		}else{
			console.log("estado:"+this.readyState+", resp servidor:"+this.status);
		}
	}

	//hacer la llamada al servidor


	//construir la peticion
	httprq.open("GET", "/DAW/SERVIDOR/VideoJuegos/pedirdatosAPI.py", true)

	httprq.send();
}

function creaFilas(listaVideoJuegos){

	console.log(listaVideoJuegos);

	const plantilla = document.getElementById("filaDatos");
	tbodyDatos = document.getElementById("tablaDatos");

	//bucle
	for (let vj of listaVideoJuegos){
		let filaTR = document.importNode(plantilla.content, true);

		filaTR.querySelector("#fila").id ="vj"+vj[0];

		let nombreTD = filaTR.querySelector("#nombre");
		nombreTD.innerHTML = vj[1];

		let empresaTD = filaTR.querySelector("#empresa");
		empresaTD.innerHTML = vj[2];

		let tematicaTD = filaTR.querySelector("#tematica");
		tematicaTD.innerHTML = vj[3];

		let nJugTD = filaTR.querySelector("#nJug");
		nJugTD.innerHTML = vj[4];

		let publiTD = filaTR.querySelector("#publicacion");
		publiTD.innerHTML = vj[1];

		let borrarTD = filaTR.querySelector("#borrar");
		borrarTD.addEventListener("click", function(){ borrar(vj[0]);});

		tbodyDatos.appendChild(filaTR);
	}
}

function borrar(id){
	const httprq = new XMLHttpRequest()

	httprq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);

			let borrado = JSON.parse(this.responseText);
			if(borrado){
				let filaBorrar = document.getElementById("vj"+id);

				filaBorrar.remove();
			}else{
				alert("no se pudo borrar")
			}
		}else{
			console.log("estado:"+this.readyState+", resp servidor:"+this.status);
		}
	}

	//construir la peticion
	httprq.open("GET", "/DAW/SERVIDOR/VideoJuegos/borrarAPI.py?id="+id, true)

	httprq.send();
}

function modificar(id){
	alert(id);
}

function filtrar(){
	let nombre = document.getElementById("nombre").value;
	let empresa = document.getElementById("empresaForm").value;
	let tematica = document.getElementById("tematicaForm").value;
	let nJug = document.getElementById("numJugadoresForm").value;
	let anioInicial = document.getElementById("anioInicialForm").value;
	let anioFinal = document.getElementById("anioFinalForm").value;

	let filtro = ""
	if(empresa != ""){
		filtro = "empresa="+empresa;
	}
	if(tematica != ""){
		if(filtro != ""){
			filtro += "&tematica="+tematica;
		}else{
			filtro += "tematica="+tematica
		}
	}
	if(nJug != ""){
		if(filtro != ""){
			filtro += "&numJugadores="+nJug;
		}else{
			filtro += "numJugadores="+nJug;
		}
	}
	if(anioInicial != ""){
		if(filtro != ""){
			filtro += "&anioInicial="+anioInicial;
		}else{
			filtro += "anioInicial="+anioInicial;
		}
	}
	if(anioFinal != ""){
		if(filtro != ""){
			filtro += "&anioFinal="+anioFinal;
		}else{
			filtro += "anioFinal="+anioFinal;
		}
	}

	console.log(filtro);

	const httprq = new XMLHttpRequest()

	httprq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);

			tbodyDatos = document.getElementById("tablaDatos");
			tbodyDatos.innerHTML= "";

			let datos = JSON.parse(this.responseText);
			creaFilas(datos);

		}else{
			console.log("estado:"+this.readyState+", resp servidor:"+this.status);
		}
	}

	//construir la peticion
	httprq.open("GET", "/DAW/SERVIDOR/VideoJuegos/filtrarDatosAPI.py?"+filtro, true)

	httprq.send();
}

function insertar(){
	let nombre = document.getElementById("nombreInsertar").value;
	let empresa = document.getElementById("empresaInsertar").value;
	let tematica = document.getElementById("tematicaInsertar").value;
	let nJug = document.getElementById("numJugadoresInsertar").value;
	let publicacion = document.getElementById("anioInsertar").value;

	let insertaDatos = "";
	let datosOk = true;

	if(nombre != ""){
		insertaDatos += "nombre="+nombre;
	}else{
		datosOk = false;		
	}
	if(empresa != ""){
		insertaDatos += "&empresa="+empresa;
	}else{
		datosOk = false;		
	}
	if(tematica != ""){
		insertaDatos += "&tematica="+tematica;
	}else{
		datosOk = false;		
	}
	if(nJug != ""){
		insertaDatos += "&nJug="+nJug;
	}else{
		datosOk = false;		
	}
	if(publicacion != ""){
		insertaDatos += "&anio="+publicacion;
	}else{
		datosOk = false;		
	}	


	console.log(insertaDatos);	

	if(datosOk){
		//crear el objeto para conectar al servidor
		const httprq = new XMLHttpRequest();

		//resolver la respuesta

		httprq.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){ //si la respuesta es correcta
				console.log(this.responseText);
				principal();

			}else{ //la peticion tiene un error
				console.log("estado: "+this.readyState+", resp servidor:"+this.status);
			}
		}

		//hacer la llamada al servidor
		//contruir la peticion
		httprq.open("GET", "/DAW/SERVIDOR/VideoJuegos/insertaDatosAPI.py?"+insertaDatos,true);

		//ejecuto la peticion
		httprq.send();		
	}else{
		alert("datos incorrectos")
	}
}