let httprq = new XMLHttpRequest();

function llamadaAjax(){
	
	/*****************************
	 * configurar el objeto para la peticion
	 * al servidor
	 * ***************************/

	/*******************************
	 * registrar la funcion que 
	 * trata la respuesta del servidor
	 * 
	 * se hace mediante el evento: onreadystatechange
	 * 
	 * este evento se dispara cuando se completa
	 * la respuesta del servidor
	 * 
	 * *****************************/

	httprq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){ //si la respuesta es correcta
			console.log(this.responseText);

			let datos =  JSON.parse(this.responseText);
			crearSalida(datos);

		}else{ //la peticion tiene un error
			console.log("estado: "+this.readyState+", resp servidor:"+this.status);
		}
	}

	/******************
	 * peticion al servidor
	 * ****************/

	//contruir la peticion
	httprq.open("GET", "/SERVIDOR/ajaxServ/pedirdatos.py",true);

	//ejecuto la peticion
	httprq.send();

}


function crearSalida(datos){

	let tablaHtml = "<table border='1px solid black'>";

	for (d of datos){
		tablaHtml += "<tr>";
		for (elem of d){
			tablaHtml += "<td>"+elem+"</td>";
		}
		tablaHtml += "</tr>";
	}

	tablaHtml += "</table>";

	document.getElementById("salida").innerHTML = tablaHtml;
}

function insertaAjax(){
	let txt = document.getElementById("texto").value;
	let num = document.getElementById("numero").value;

	let peticion = "/SERVIDOR/ajaxServ/insertadatos.py?texto="+txt+"&numero="+num;

	httprq.open("GET", peticion, true);

	httprq.send();

}