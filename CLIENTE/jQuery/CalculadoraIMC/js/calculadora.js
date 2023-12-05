$(principal);

function principal(){
	$("#caja").hide();

	$("#boton").click(function(){
		let imc	= 0;
		let peso = Number($("#peso").val());
		let altura = Number($("#altura").val());

		imc = (peso/(altura*altura));

		$("#caja").show();

		$("#salida").html("El resultado es "+imc);

		console.log(imc);
	})
}