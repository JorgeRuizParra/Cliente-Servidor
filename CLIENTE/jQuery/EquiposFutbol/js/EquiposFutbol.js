$(inicio);

function inicio(){
	$.get("equipos.py",
		function(data,status){
			crearOpciones(data.equipos);
			console.log(status);
		});
}

function crearOpciones(datos) {

    let equipos = $("#equipos")

	for(equipo of datos){
		console.log(equipo);
        let option = $("<option>");
        option.attr("value", equipo);
        option.html(equipo);
        equipos.append(option);
	}
	
}

function pedirDatos(){
	$.get("datosEquipos.py?equipo="+$("#equipos").val(),
		function(data,status){
			$("#datosequipo").html("");
			var clave = Object.keys(data);
			$("#datosequipo").html("<h2>"+clave+"</h2> <br><h3>Estadio: "+data[clave].estadio+"</h3><br><h3>Fundacion: "+data[clave].fundacion+"</h3>");
		});
}