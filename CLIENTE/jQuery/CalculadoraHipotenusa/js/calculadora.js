$(principal);

function principal(){
	$("#btnHipo").click(function(){
		let hipotenusa	= 0;
		let c1 = Number($("#cat1").val());
		let c2 = Number($("#cat2").val());

		hipotenusa = (Math.sqrt(c1*c1+c2*c2)).toFixed(2);

		$("#salidaHipo").html("El resultado es "+hipotenusa);
	})

	$("#btnIMC").click(function(){
		let imc	= 0;
		let peso = Number($("#peso").val());
		let altura = Number($("#altura").val());

		imc = (peso/(altura*altura)).toFixed(2);

		$("#salidaIMC").html("El resultado es "+imc);
	})
}