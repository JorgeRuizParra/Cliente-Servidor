function cambiaFondo(id){
    //leer los 3 p
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");

    //si el valor que se le pasa a funcion es igual a p1,p2,p3 cambia el fondo del seleccionado
    if(id == "p1"){
        p1.style.backgroundColor="lightblue";
    }else{
        p1.style.backgroundColor="white";
    }

    if(id == "p2"){
        p2.style.backgroundColor="lightblue";
    }else{
        p2.style.backgroundColor="white";
    }

    if(id == "p3"){
        p3.style.backgroundColor="lightblue";
    }else{
        p3.style.backgroundColor="white";
    }
}