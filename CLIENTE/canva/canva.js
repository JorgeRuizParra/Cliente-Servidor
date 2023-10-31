onload=inicio;

function inicio(argument) {
	const mc = document.getElementById('miCanvas');
	const mc2 = document.getElementById('miCanvas2');

	ancho = mc.width
	largo = mc.height;

	const ctx =mc.getContext("2d");

	//Dibujar las diagonales del canvas
	//principal
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.strokeStyle = "red" 
	ctx.moveTo(0, 0); //dibuja una linea del punto 0,0
	ctx.lineTo(ancho, largo); //hasta el punto ancho, largo
	ctx.stroke();
	ctx.closePath();

	//secundaria
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.strokeStyle = "lightblue"
	ctx.moveTo(ancho, 0);
	ctx.lineTo(0, largo);
	ctx.stroke();
	ctx.closePath();

	//crear un rectangulo relleno
	// dos primeros parametros son las coordenadas de la esquina arriba-izquierda
	// dos ultimos parametros son el ancho y el alto del rectangulo
	ctx.fillStyle = "lightgreen"
	ctx.fillRect(200,150,200,100)

	//crear un rectangulo solo con el borde de tamaÃ±o 1 y color rojo
	ctx.lineWidth = 2;
	ctx.strokeStyle = "limegreen" //color verde
	ctx.strokeRect(450,150,50,100)

	ctx.beginPath();
	ctx.strokeStyle = "red"
	ctx.arc(100,100,50,0,Math.PI*2);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "#123456"
	ctx.fillRect(0,0,ancho,largo)

	ctx.beginPath();
	ctx.fillStyle = "white"
	ctx.arc(100,100,100,0,Math.PI*2);
	ctx.arc(300,100,100,0,Math.PI*2);
	ctx.arc(500,100,100,0,Math.PI*2);
	ctx.fill();
	ctx.closePath();


}