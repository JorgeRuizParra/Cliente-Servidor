function compruebaPrimo(){
    //sacamos los valores de los campos del formulario que envie el cliente
    let num = document.getElementById("num").value;

    let salida = document.getElementById("salida");

    numero = parseInt(num);

    let httprq = new XMLHttpRequest();

    let peticion = "primos.py?num="+numero;

    let correcto = "";

    if (Number.isInteger(numero)){//comprueba si es entero, menor que 100 y que es positivo
        if(numero < 100 && numero > 0){
            correcto = "si";
        }else{
            alert("Tiene que ser un numero entre 0 y 100")
        }
    }else{
        alert("tienes que introducir un numero entero")
    }
        httprq.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){ //si la respuesta es correcta, se ejecuta este codigo
                //para ver la diferencia entre texto normal y  el json
                console.log(this.responseText);
    
                let prim =  JSON.parse(this.responseText);//coge la respuesta del servidor
                if(prim == true && correcto == "si"){// comprueba que el numero es primo y los valores establecidos para el numero
                    salida.innerHTML = "El numero es primo" //imprime en la salida si es primo o no
                }else{
                    salida.innerHTML = "El numero no es primo"
                }
            }else{ //la peticion tiene un error
                console.log("estado: "+this.readyState+", resp servidor:"+this.status);
            }
        }
    

    //construir peticion
	httprq.open("GET", peticion, true) //tiene 3 parametros: tipo de petición, que quiero pedir y ejecucion sincrona o asincrona

	//ejecuto la peticion
	httprq.send();
}
