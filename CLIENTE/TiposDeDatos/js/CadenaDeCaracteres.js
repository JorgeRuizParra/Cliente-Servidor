function cadenaCaract() {
	
	let texto = document.getElementById("texto").value.trim();

	console.log(texto.length);
	//document.getElementById("salida1").innerHTML = texto.slice(3,7);
	//document.getElementById("salida1").innerHTML = texto.substr(3,7);
	//document.getElementById("salida1").innerHTML = texto.replace("ABC","XYZ");
	//document.getElementById("salida1").innerHTML = texto.replaceAll("ABC","XYZ");
	//document.getElementById("salida1").innerHTML = texto.toLowerCase();

	//document.getElementById("salida1").innerHTML = texto.padStart(5, "-");
	//document.getElementById("salida1").innerHTML = texto.padEnd(5, "-");
	//document.getElementById("salida1").innerHTML = texto[15];
	//document.getElementById("salida1").innerHTML = texto.split();
	document.getElementById("salida1").innerHTML = `Has escrito ${texto}`;

	console.log(texto);
	texto[0]="a"; //no hace nada

	console.log(texto);
}
