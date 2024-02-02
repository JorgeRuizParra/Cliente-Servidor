$(inicio);

function inicio(){
    $("button").click(
        function(){
            $("#div1").load("datos/texto.dat", 
            function (responseTxt, statusTxt, xhr){
                if(statusTxt == "success"){
                    console.log(responseTxt);
                    alert("¡Datos recuperados con exito!");
                }
                if(statusTxt == "error"){
                    console.log(responseTxt);
                    alert("Error:" + xhr.status + ":" + xhr.statusText);
                }
            }
            );
            $("#div1").css("backgroundColor", "black");
        }
    );
}