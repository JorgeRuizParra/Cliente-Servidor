onload=inicio;
let mc;
let ctx;
let ancho;
let largo;
let Nturno = 1;
let tablero:["","","","","","","","",""];

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

function jugada(evento){
	let x = evento.clientX - mc.getBoundingClientRect().left;
	let y = evento.clientY - mc.getBoundingClientRect().top;
	console.log(x + " - " + y);
	turno();
	
		if((x > 0 && x < 200)&&(y > 0 && y < 200)){
			pintaCirculo(100,100);
		}
		else if((x > 0 && x < 200)&&(y > 200 && y < 400)){
			pintaCirculo(100,300);
		}
		else if((x > 0 && x < 200)&&(y > 400 && y < 600)){
			pintaCirculo(100,500);
		}
		else if((x > 200 && x < 400)&&(y > 0 && y < 200)){
			pintaCirculo(300,100);
		}
		else if((x > 200 && x < 400)&&(y > 200 && y < 400)){
			pintaCirculo(300,300);
		}
		else if((x > 200 && x < 400)&&(y > 400 && y < 600)){
			pintaCirculo(300,500);
		}
		else if((x > 400 && x < 600)&&(y > 0 && y < 200)){
			pintaCirculo(500,100);
		}
		else if((x > 400 && x < 600)&&(y > 200 && y < 400)){
			pintaCirculo(500,300);
		}
		else if((x > 400 && x < 600)&&(y > 400 && y < 600)){
			pintaCirculo(500,500);
		}
	
}

function turno() {
	if(Nturno == 1){
		ctx.fillStyle = "lightcoral";
		Nturno = 2;
	}else{
		ctx.fillStyle = "lightblue";
		Nturno = 1;
	}

}