function mostrarParrafo(num){
    //obtener la informacion de el fichero python mediante la url proporcionada
	$.get("ejer3B.py?parr="+num,
		function(data,status){
            console.log(data)
            //imprimir data que es el resultado que devuelve el python
            $("#salida").html(data)
		});
}