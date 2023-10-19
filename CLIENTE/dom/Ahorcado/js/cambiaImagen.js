onload = inicio;

const dirImagenes = "imagenes/"

const palabras = ["LEON", "TIGRE", "ELEFANTE", "COCODRILO", "GIRAFFA", "RINOCERONTE", "PINGUINO", "DELFIN", "ORNITORRINCO", "MURCIELAGO", "LOBO", "LEOPARDO", "CANGURO", "GALLO", "SERPIENTE", "CONEJO", "HORMIGA", "ARANA", "TIBURON", "FOCA", "HUMANO", "CEBRA", "COCODRILO", "SURICATA", "HIDRA", "BUFALO", "OSO", "KOALA", "PANDA", "AGUILA", "MOSQUITO", "MARIPOSA", "GOLONDRINA", "DODO", "TORTUGA", "CAMELLO", "ALCE", "ORCA", "ORNITORRINCO", "ARMADILLO", "PUMA", "CARACOL"];

let palJugada = "";

let numLetras = 0;
let letrasAcertadas = 0;

let contadorAhorcado = 1;

let listaBotones

let volverJugar


function inicio(){
	listaBotones = document.getElementsByClassName("btn");
	volverJugar = document.getElementById("btnVolverAJugar");
	palJugada= palabras[Math.floor(Math.random()*palabras.length)];
	numLetras = palJugada.length;
	letrasAcertadas = 0;
	contadorAhorcado = 1;
	document.getElementById('imagen').src=dirImagenes+"ahorcado"+contadorAhorcado+".png";	
	dibujaLineas(); 
	console.log(palJugada);
	document.getElementById("salida").innerHTML = "";
}

function dibujaLineas(){
	let divLineas = document.getElementById("lineas");

	divLineas.innerHTML = "";
	
	for (var i = 0; i < numLetras; i++) {
		let linea = document.createElement("div");
		linea.className="col";
		let parrafo = document.createElement("p");
		parrafo.id="linea"+i;
		parrafo.className="display-6"
		parrafo.innerHTML="_";
		linea.appendChild(parrafo);
		divLineas.appendChild(linea);
		
	}
}

function jugarDeNuevo() {
	let listaBotones = document.getElementsByClassName("btn");
	for (boton of listaBotones){
		boton.disabled = false;	
		boton.className = "btn btn-dark";
	}

	inicio();
}

function letraJugada(letra) {
	let posLetra=palJugada.indexOf(letra);
	if(posLetra==-1){
		document.getElementById('b_'+letra).disabled = true;
		document.getElementById('b_'+letra).className = "btn btn-danger";
		contadorAhorcado++;
		document.getElementById('imagen').src=dirImagenes+"ahorcado"+contadorAhorcado+".png";
		if(contadorAhorcado==7){
			for (boton of listaBotones){
				boton.disabled = true;	
			}
			btnVolverAJugar.disabled = false;
			document.getElementById("salida").innerHTML = "Has Perdido";		
		}	
	}else{
		document.getElementById('b_'+letra).disabled = true;
		document.getElementById('b_'+letra).className = "btn btn-success";
		let linea = document.getElementById("linea"+posLetra);
		linea.innerHTML=letra;
		letrasAcertadas++;
		for (var i = posLetra+1; i < numLetras; i++) {
			if(letra == palJugada.charAt(i)){
				let linea = document.getElementById("linea"+i);
				linea.innerHTML=letra;
				letrasAcertadas++;
			}
		}
	}
	if(letrasAcertadas == numLetras){
		for (boton of listaBotones){
				boton.disabled = true;	
		}
		btnVolverAJugar.disabled = false;
		document.getElementById("salida").innerHTML = "Has Ganado";
	}
}