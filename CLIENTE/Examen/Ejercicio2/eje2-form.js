function validaTexto(){
    let texto = document.getElementById("texto").value;
    //comprueba que la longitud del valor este entre 8 y 10
    if (texto.length >= 8 && texto.length <= 10){
        //si empieza por 123 devuelve true
        if(texto.substring("123","")){
            return true;
        }else{
            alert("Error: El texto debe comenzar por 123");
            return false;
        }

    }else{//si no tiene entre 8 y 10 caracteres devuelver false
        alert("Error: El texto debe tener entre 8 y 10 caracteres");
        return false;
    }

}