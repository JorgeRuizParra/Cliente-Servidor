let cartas = [1,1,2,2,3,3]

function barajar(array) {
    array.sort(() => Math.random() - 0.5);
}

barajar(cartas);

console.log(cartas);
 let a = 0;
   

    let tabla = $("<tabla>");

    let fila1 = $("<tr>");
    let fila2 = $("<tr>");

let carta1 = $("<td><div class='carta'></div></td>");
let carta2 = $("<td><div class='carta'></div></td>");
let carta3 = $("<td><div class='carta'></div></td>");
let carta4 = $("<td><div class='carta'></div></td>");
let carta5 = $("<td><div class='carta'></div></td>");
let carta6 = $("<td><div class='carta'></div></td>");

fila1.append(carta1, carta2, carta3);
fila2.append(carta4, carta5, carta6);

tabla.append(fila1, fila2);

$("#tablero").append(tabla);

carta1.click(function(){
    carta1.html("<td><div class='cartapulsada'></div></td>");
    carta1.addClass("carta"+cartas[0]+"pulsada");
    carta1.remove("carta"+cartas[0]+"pulsada");
})
carta2.click(function(){
    carta2.html("<td><div class='cartapulsada'></div></td>");
    carta2.addClass("carta"+cartas[1]+"pulsada");
    carta3.remove("carta"+cartas[1]+"pulsada");
})
carta3.click(function(){
    carta3.html("<td><div class='cartapulsada'></div></td>");
    carta3.addClass("carta"+cartas[2]+"pulsada");
    carta3.remove("carta"+cartas[2]+"pulsada");
})
carta4.click(function(){
    carta4.html("<td><div class='cartapulsada'></div></td>");
    carta4.addClass("carta"+cartas[3]+"pulsada");
    carta4.remove("carta"+cartas[3]+"pulsada");
})
carta5.click(function(){
    carta5.html("<td><div class='cartapulsada'></div></td>");
    carta5.addClass("carta"+cartas[4]+"pulsada");
    carta5.remove("carta"+cartas[4]+"pulsada");
})
carta6.click(function(){
    carta6.html("<td><div class='cartapulsada'></div></td>");
    if (carta6.hasClass("carta"+cartas[5]+"pulsada") == true) {
        carta6.removeClass("carta"+cartas[5]+"pulsada");
    } else {
        carta6.addClass("carta"+cartas[5]+"pulsada");
    }
})




