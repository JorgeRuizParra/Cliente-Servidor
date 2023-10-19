function separaEnLineas() {
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	let salida = ""; //para componer la salida de los parrafos y una letra en cada p

	for (letra of texto){ //array tipo for-of para recorrer el string
		salida = salida + `<p>${letra}</p>`; //con cada letra se crea un elemento p
	}

	//se crean los elementos p del DOM dentro del div salida1
	document.getElementById("salida1").innerHTML = salida;
}

function contarLetras() {
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	//contador para contar las letras
	let contador = 0;

	//bucle for-of para recorrer cada letra
	for (letra of texto){
		if((letra>="A") &&(letra<="Z")){ //si la eltra esta entre A y Z se cuenta
			contador++;
		}
	}

	document.getElementById("salida1").innerHTML = `<p>${contador}</p>`
}

function darLaVuelta(){
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	//variable que contendra la frase dada la vuelta
	let salida = "";

	//bucle para crear el texto dado la vuelta
	for (letra of texto){
		salida = letra + salida; //se concatena por delante y eso da la vuelta a la frase
	}

	document.getElementById("salida1").innerHTML = `<p>${salida}</p>`
}

function buscarPalabra(){
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	//una variable para guardar la palabra a buscar
	let palabra = document.getElementById("palabra").value;

	//variable con el elemento p de salida
	let salida = "<p>La palabra no existe</p>";

	if(buscaP(texto,palabra)){ //si la palabra esta dentro de texto se cambia el mensaje
		salida = "<p>La palabra existe</p>";
	}

	//se crea el elemento p con el mensaje 
	document.getElementById("salida1").innerHTML = salida;
}

function buscaP(t,p){
	//variable que va a contener el resultado de la busqueda, 
	//true si esta la palabra, false en caso contrario
	let res = false;

	//condicional que usa el metodo indexOf, si devuelve -1 la palabra no esta
	if(t.indexOf(p) != -1){
		res = true;
	}

	return res; //devolver el resultado
}

function contarLetrasPalabras2() {
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	//una variable para guardar la palabra a buscar
	let palabra = document.getElementById("palabra").value;

	//contador para contar las letras
	let contador = 0;

	for (letra of texto.toUpperCase()){
		if(letra == palabra.toUpperCase()){
			contador++;
		}
	}

	document.getElementById("salida1").innerHTML = `<p>${contador}</p>`

}

function contarLetra(){

	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	//una variable para guardar la letra a contar
	let letra = document.getElementById("letra").value;

	//contador de veces que aparece la letra
	let contador = 0;

	for (l of texto){
		if (letra == l){
			contador++;
		}
	}

	document.getElementById("salida1").innerHTML = `<p>${contador}</p>`;
}

function contarVocales() {
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	let a = 0;
	let e = 0;
	let i = 0;
	let o = 0;
	let u = 0;

	for(l of texto){
		if(l == "a" || l == "A"){
			a++;
		}
		else if(l == "e" || l == "E"){
			e++;
		}
		else if(l == "i" || l == "I"){
			i++;
		}
		else if(l == "o" || l == "O"){
			o++;
		}
		else if(l == "u" || l == "U"){
			u++;
		}
		else{
			document.getElementById("salida1").innerHTML = `<p>no hay vocales</p>`;
		}

		document.getElementById("salida1").innerHTML = `<p>hay ${a} as, ${e} es, ${i} is, ${o} os, ${u} us</p>`;
	}
}

function divideEnPalabras(t) {

	res = t.split(" ");

	return res;
}

function divPal() {
	//una variable para guardar el texto del input
	let texto = document.getElementById("texto").value;

	let listaPalabras = divideEnPalabras(texto);

	document.getElementById("salida1").innerHTML = `<p>${listaPalabras}</p>`;
}