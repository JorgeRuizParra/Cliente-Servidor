let tamanoLista = 0 ;

function crearMiDiv() {
	let texto = document.getElementById("entradaTexto").value;

	let parrafo = document.createElement('p');

	parrafo.innerHTML = texto;

	document.getElementById("miDiv").appendChild(parrafo);
}

function anadirElemento() {
	let li = document.createElement('li');
    
    tamanoLista++;
	
	li.innerHTML = "Elemento de lista "+tamanoLista;

	

	document.getElementById("miLista").appendChild(li);
}

function crearEnlace() {
	let enlace = document.createElement('a');

	enlace.innerHTML = "Visitar w3schools";
	enlace.setAttribute("href","https://www.w3schools.com/");

	document.getElementById("miDiv").appendChild(enlace);
}

function cambiaColor() {
	let div = document.getElementById("miElemento");
			
	const hexad = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
			
	let r = hexad[Math.floor(Math.random() * 16)]+hexad[Math.floor(Math.random() * 16)];
	let g = hexad[Math.floor(Math.random() * 16)]+hexad[Math.floor(Math.random() * 16)];
	let b = hexad[Math.floor(Math.random() * 16)]+hexad[Math.floor(Math.random() * 16)];

	let color = "#"+r+g+b

	console.log(color);

	div.style.background = color;

}

let tamActual = 0;

function cambiarTexto(){
    let miTexto = document.getElementById("miTexto");
    let nuevoTam= [10,20,30];

    tamActual++;
    if (tamActual == 3){
        tamActual= 0;
    }
    miTexto.style.fontSize = nuevoTam[tamActual]+'px';

}

opacidadGlobal=-1;

function ocultarElemento(){


	let elementoOculto = document.getElementById("elementoOculto");

	let opacidad=["0%", "100%"];
	opacidadGlobal++;
	if (opacidadGlobal == 2){
		opacidadGlobal=0;
	}
	

	elementoOculto.style.opacity=opacidad[opacidadGlobal];
}

function textoCambianteEntrada(){
	let textoCambiante = document.getElementById("textoCambiante");

	textoCambiante.style.color="lime";
}

function textoCambianteSalida(){
	let textoCambiante = document.getElementById("textoCambiante");

	textoCambiante.style.color="maroon";
}