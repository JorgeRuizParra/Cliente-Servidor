function calcula() {
	console.log("Funcion calcula");
	let IMC = 0;

	//leer los datos del formulario, los numeros
	let peso = Number(document.getElementById("peso").value);
	let altura = Number(document.getElementById("alt").value);

	//realizar la operacion

	IMC = (peso/(altura*altura)).toFixed(2);

	console.log(IMC);
	//mostrar el resultado
	document.getElementById("salida").innerHTML = IMC;
}