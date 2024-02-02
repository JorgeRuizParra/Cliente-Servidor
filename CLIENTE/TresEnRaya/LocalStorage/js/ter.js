onload = inicio
//objeto que contiene la información de la partida
// tablero -> array
// turno -> int
// numero de fichas jugadas -> int

let numeroJugada;

function inicio() {
	if (localStorage.getItem('juego')){
		let datosArray = JSON.parse(localStorage.getItem("juego"));
		juego = datosArray;
		actualizar();
		estaFinalizada();
	}else{
		juego = {
			tablero:["","","","","","","","",""],
			turno:1,
			numFich:0,
			partidaFinalizada:false
		}
	}
}
	



//funcion que desarrolla una jugada
function jugar(btn,pos){

	//aumentar el numero de fichas jugadas
	juego.numFich++;


	//poner la ficha en el tablero
	if(juego.turno==1){
		//turno de X 
		btn.innerHTML = "X";
		juego.tablero[pos] = "X";
	}else{
		//turno de O 
		btn.innerHTML = "O";
		juego.tablero[pos] = "O";
	}

    


	//deshabilitar el boton jugado
	btn.disabled=true;

	//evaluar si en la jugada se hizo el tres en raya
	//se comprueba a partir de la quinta ficha jugada
	estaFinalizada();

	//comprobar que la partida está finalizada
	if(!juego.partidaFinalizada){
		//si no se acabo se cambia de turno
		if(juego.turno==1){
			//cambiar de turno al jugador 2
			juego.turno=2;
		}else{
			//cambiar de turno al jugador 1
			juego.turno=1;
		}
	}else{
		for(b of document.getElementsByClassName('boton')){
			b.disabled=true;
		}
	}

	console.log(juego.numFich);

	const juegoJSON = JSON.stringify(juego)

	localStorage.setItem('juego', juegoJSON)

	const jugadaJSON = JSON.stringify(juego)

	localStorage.setItem('jugada'+juego.numFich, jugadaJSON)
}

function estaFinalizada(){
	if(juego.numFich>=5){
		btn = $(".btns-a-r") 
		if(hayGanador()){
			document.getElementById('salida').innerHTML="El ganador es el jugador "+juego.turno;
			juego.partidaFinalizada=true;
			btn.css('display','flex');
			jugadaFinal = juego.numFich;
			for(b of document.getElementsByClassName('boton')){
				b.disabled=true;
			}
		}else if(juego.numFich == 9){
			document.getElementById('salida').innerHTML="Empate";
			juego.partidaFinalizada=true;
			btn.css('display','flex');
			for(b of document.getElementsByClassName('boton')){
				b.disabled=true;
			}
		}
	}
}

function retroceder(){
	if(juego.numFich > 1){
		let jugada = juego.numFich - 1  
		let datosArray = JSON.parse(localStorage.getItem("jugada" + jugada));
		juego = datosArray;
		actualizar();
	}else{
		alert("Es la primera jugada")
	}
}

function avanzar(){
	if(juego.numFich < jugadaFinal){
		let jugada = juego.numFich + 1  
		let datosArray = JSON.parse(localStorage.getItem("jugada" + jugada));
		juego = datosArray;
		actualizar();
		estaFinalizada();
	}else{
		alert("Es la ultima jugada")
	}
}

function actualizar(){
	for (i = 0; i < juego.tablero.length; i++) {
		const btn = document.getElementById("btn"+i)
		btn.innerHTML = juego.tablero[i];
		btn.disabled = juego.tablero[i] !== "";
	}
}

function reiniciar(){
	juego.tablero = ["","","","","","","","",""];
	juego.turno = 1;
	juego.numFich = 0;
	juego.partidaFinalizada=false;

	localStorage.clear()

	document.getElementById('salida').innerHTML="";
	
	for(b of document.getElementsByClassName('boton')){
		b.innerHTML = "";
		b.disabled=false;
	}

	btn = $(".btns-a-r")
	btn.css("display","none")
}

function hayGanador(){
	if(juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[1] && juego.tablero[1]==juego.tablero[2]){
		return true;	
	}
	if(juego.tablero[3]!= "" && juego.tablero[3]==juego.tablero[4] && juego.tablero[4]==juego.tablero[5]){
		return true;	
	}
	if(juego.tablero[6]!= "" && juego.tablero[6]==juego.tablero[7] && juego.tablero[7]==juego.tablero[8]){
		return true;	
	}
	if(juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[3] && juego.tablero[3]==juego.tablero[6]){
		return true;	
	}
	if(juego.tablero[1]!= "" && juego.tablero[1]==juego.tablero[4] && juego.tablero[4]==juego.tablero[7]){
		return true;	
	}
	if(juego.tablero[2]!= "" && juego.tablero[2]==juego.tablero[5] && juego.tablero[5]==juego.tablero[8]){
		return true;	
	}
	if(juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[4] && juego.tablero[4]==juego.tablero[8]){
		return true;	
	}
	if(juego.tablero[2]!= "" && juego.tablero[2]==juego.tablero[4] && juego.tablero[4]==juego.tablero[6]){
		return true;	
	}


	return false;
}