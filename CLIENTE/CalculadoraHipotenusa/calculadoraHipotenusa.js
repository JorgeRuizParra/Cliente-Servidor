function calcula() {
	console.log("Funcion calcula");
	let hipotenusa = 0;

	//leer los datos del formulario, los numeros
	let c1 = Number(document.getElementById("cat1").value);
	let c2 = Number(document.getElementById("cat2").value);

	//realizar la operacion

	hipotenusa = (Math.sqrt(c1*c1+c2*c2)).toFixed(2);

	console.log(hipotenusa);
	//mostrar el resultado
	document.getElementById("salida").innerHTML = hipotenusa;
}