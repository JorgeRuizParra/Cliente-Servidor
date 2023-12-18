function arrastrando(event) {
    console.log(event.target.id);
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  }

  function arrastrandoFin(event) {
    console.log(event.target.id);
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  }

function recibiendo(event){
    event.preventDefault();
    console.log(event.target.id);
}

function soltar(event) {
    const id = event
      .dataTransfer
      .getData("text")

    event.currentTarget.style.margin= "0px";
      

    console.log("soltar:"+id)
    console.log("destino:"+event.target.id)

    let objQueArrastro = $("#"+id)
    let destino = $("#"+event.target.id);

    destino.append(objQueArrastro);

    destino.removeAttr("ondrop");

}

$("#boton").click(function(){
    var img1 = $("#draggable-1");

    var padreimg1 = img1.parent().attr("id");

    if (padreimg1 == "destino1"){
      $("#destino1").css("backgroundColor" , "lightgreen");
    } else {
      $("#destino1").css("backgroundColor" , "lightcoral");
    } 
    
    var img2 = $("#draggable-2");

    var padreimg2 = img2.parent().attr("id");;

    if (padreimg2 == "destino2"){
      $("#destino2").css("backgroundColor" , "lightgreen");
    } else {
      $("#destino2").css("backgroundColor" , "lightcoral");
    } 

    var img3 = $("#draggable-3");

    var padreimg3 = img3.parent().attr("id");;

    if (padreimg3 == "destino3"){
      $("#destino3").css("backgroundColor" , "lightgreen");
    } else {
      $("#destino3").css("backgroundColor" , "lightcoral");
    } 

    var img4 = $("#draggable-4");

    var padreimg4 = img4.parent().attr("id");;

    if (padreimg4 == "destino4"){
      $("#destino4").css("backgroundColor" , "lightgreen");
    } else {
      $("#destino4").css("backgroundColor" , "lightcoral");
    } 

    var btnNvl = $("#btnNvl");    

    if (padreimg1 == "destino1" && padreimg2 == "destino2" && padreimg3 == "destino3" && padreimg4 == "destino4"){
      btnNvl.css("display", "block")
    }
})

$("#btnNvl").click(function(){
  $("#juego1").css("display" , "none");
  $("#juego2").css("display" , "block");
})

$("#boton2").click(function(){
  var img5 = $("#draggable-5");

  var padreimg5 = img5.parent().attr("id");

  if (padreimg5 == "destino5"){
    $("#destino5").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino5").css("backgroundColor" , "lightcoral");
  } 
  
  var img6 = $("#draggable-6");

  var padreimg6 = img6.parent().attr("id");;

  if (padreimg6 == "destino6"){
    $("#destino6").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino6").css("backgroundColor" , "lightcoral");
  } 

  var img7 = $("#draggable-7");

  var padreimg7 = img7.parent().attr("id");;

  if (padreimg7 == "destino7"){
    $("#destino7").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino7").css("backgroundColor" , "lightcoral");
  } 

  var img8 = $("#draggable-8");

  var padreimg8 = img8.parent().attr("id");;

  if (padreimg8 == "destino8"){
    $("#destino8").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino8").css("backgroundColor" , "lightcoral");
  } 

  var btnNvl2 = $("#btnNvl2");    

  if (padreimg5 == "destino5" && padreimg6 == "destino6" && padreimg7 == "destino7" && padreimg8 == "destino8"){
    btnNvl2.css("display", "block")
  }
})

$("#btnNvl").click(function(){
  $("#juego1").css("display" , "none");
  $("#juego2").css("display" , "block");
})

$("#boton3").click(function(){
  var img9 = $("#draggable-9");

  var padreimg9 = img9.parent().attr("id");

  if (padreimg9 == "destino9"){
    $("#destino9").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino9").css("backgroundColor" , "lightcoral");
  } 
  
  var img10 = $("#draggable-10");

  var padreimg10 = img10.parent().attr("id");;

  if (padreimg10 == "destino10"){
    $("#destino10").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino10").css("backgroundColor" , "lightcoral");
  } 

  var img11 = $("#draggable-11");

  var padreimg11 = img11.parent().attr("id");;

  if (padreimg11 == "destino11"){
    $("#destino11").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino11").css("backgroundColor" , "lightcoral");
  } 

  var img12 = $("#draggable-12");

  var padreimg12 = img12.parent().attr("id");;

  if (padreimg12 == "destino12"){
    $("#destino12").css("backgroundColor" , "lightgreen");
  } else {
    $("#destino12").css("backgroundColor" , "lightcoral");
  }   

  if (padreimg9 == "destino9" && padreimg10 == "destino10" && padreimg11 == "destino11" && padreimg12 == "destino12"){
    $("#ganar").css("display" , "block");
  }
})

$(".reiniciar").click(function(){
  location.reload();
})

$("#btnNvl2").click(function(){
  $("#juego2").css("display" , "none");
  $("#juego3").css("display" , "block");
})