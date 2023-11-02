onload=inicio;
let mc;
let ctx;
let ancho;
let largo;
let Nturno = 2;
let tablero = [" "," "," "," "," "," "," "," "," "];
let nJugadas = 0;
let partidaFinalizada = false;

function inicio(argument) {
	mc = document.getElementById('miCanvas');

	ancho = mc.width
	largo = mc.height;

	ctx = mc.getContext("2d");

	pintaTablero();

	//añadir un evento para capturar los clicks en el canvas

	mc.addEventListener('click',function(event) {jugada(event)});
}

function pintaTablero(){	
	//crear un rectangulo relleno color gris
	// dos primeros parametros son las coordenadas de la esquina arriba-izquierda
	// dos ultimos parametros son el ancho y el alto del rectangulo
	ctx.fillStyle = "black"
	ctx.fillRect(0,0,ancho,largo)

	//crear nueve circulos blancos 
	ctx.fillStyle = "white"
	for (xCentro of [100,300,500]){
		for (yCentro of [100,300,500]){
			pintaCirculo(xCentro,yCentro);	
		}
	}
}

function pintaCirculo(xCentro, yCentro){
	//crear un circulo con los parametros coordenadas del centro, radio, inicio y fin del arco
	
	ctx.beginPath();
	ctx.arc(xCentro, yCentro,90,0,Math.PI*2);
	ctx.closePath();
	ctx.fill();
	
}

function pintaCirculoColor(xCentro, yCentro, nPos){
	//crear un circulo con los parametros coordenadas del centro, radio, inicio y fin del arco
	
	if(tablero[nPos] == " " && partidaFinalizada === false){
		ctx.beginPath();
		ctx.arc(xCentro, yCentro,90,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
		tablero[nPos] = Nturno;
		nJugadas = nJugadas+1;
	}else{

	}
}

function hayGanador(){
	if(tablero[0]!= " " && tablero[0]==tablero[1] && tablero[1]==tablero[2]){
		return true;	
	}
	if(tablero[3]!= " " && tablero[3]==tablero[4] && tablero[4]==tablero[5]){
		return true;	
	}
	if(tablero[6]!= " " && tablero[6]==tablero[7] && tablero[7]==tablero[8]){
		return true;	
	}
	if(tablero[0]!= " " && tablero[0]==tablero[3] && tablero[3]==tablero[6]){
		return true;	
	}
	if(tablero[1]!= " " && tablero[1]==tablero[4] && tablero[4]==tablero[7]){
		return true;	
	}
	if(tablero[2]!= " " && tablero[2]==tablero[5] && tablero[5]==tablero[8]){
		return true;	
	}
	if(tablero[0]!= " " && tablero[0]==tablero[4] && tablero[4]==tablero[8]){
		return true;	
	}
	if(tablero[2]!= " " && tablero[2]==tablero[4] && tablero[4]==tablero[6]){
		return true;	
	}


	return false;
}

function jugada(evento){
	let x = evento.clientX - mc.getBoundingClientRect().left;
	let y = evento.clientY - mc.getBoundingClientRect().top;
	console.log(x + " - " + y);
	
	
	
		if((x > 0 && x < 200)&&(y > 0 && y < 200)){
			turno(0);
			pintaCirculoColor(100,100,0);
		}
		else if((x > 0 && x < 200)&&(y > 200 && y < 400)){
			turno(1);
			pintaCirculoColor(100,300,1);
		}
		else if((x > 0 && x < 200)&&(y > 400 && y < 600)){
			turno(2);
			pintaCirculoColor(100,500,2);
		}
		else if((x > 200 && x < 400)&&(y > 0 && y < 200)){
			turno(3);
			pintaCirculoColor(300,100,3);
		}
		else if((x > 200 && x < 400)&&(y > 200 && y < 400)){
			turno(4);
			pintaCirculoColor(300,300,4);
		}
		else if((x > 200 && x < 400)&&(y > 400 && y < 600)){
			turno(5);
			pintaCirculoColor(300,500,5);
		}
		else if((x > 400 && x < 600)&&(y > 0 && y < 200)){
			turno(6);
			pintaCirculoColor(500,100,6);
		}
		else if((x > 400 && x < 600)&&(y > 200 && y < 400)){
			turno(7);
			pintaCirculoColor(500,300,7);
		}
		else if((x > 400 && x < 600)&&(y > 400 && y < 600)){
			turno(8);
			pintaCirculoColor(500,500,8);
		}
	
		
		if(nJugadas >= 5){
			if(hayGanador()){
				if(Nturno == 1){
					document.getElementById('salida').innerHTML="El ganador es el jugador Rojo";
					partidaFinalizada = true;
				}else if(Nturno == 2){
					document.getElementById('salida').innerHTML="El ganador es el jugador Azul";
					partidaFinalizada = true;
				}
			}else if(nJugadas == 9){
					document.getElementById('salida').innerHTML="Empate";
					partidaFinalizada = true;
			}
		}
}



function turno(posicion) {
	if(!partidaFinalizada && tablero[posicion] == " "){
		if(Nturno == 2){
			ctx.fillStyle = "lightcoral";
			Nturno = 1;
		}else{
			ctx.fillStyle = "lightblue";
			Nturno = 2;
		}
	}
}