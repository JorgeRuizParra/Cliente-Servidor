var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3JnZXJwMTIwMDBAZ21haWwuY29tIiwianRpIjoiOTUxYjFiMWYtN2NmZi00ZjdkLThlNWItY2E4YWUyZDdiZDUzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3MDU5MTA2NDEsInVzZXJJZCI6Ijk1MWIxYjFmLTdjZmYtNGY3ZC04ZTViLWNhOGFlMmQ3YmQ1MyIsInJvbGUiOiIifQ.HhPGk__11SHXgbNqJTVKnsTQ2wNM-VcBiuGJTjQ1FEU",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    if (response.estado == 200 ) {
      pedirDatos(response.datos);
    }else{
      alert("Error en la petición: "+response.descripcion+"("+response.estado+")");
    }
  });
  
  
  function pedirDatos(resultado){
    console.log(res=+resultado);
  
    let settings1 = {
      "async": true,
      "crossDomain": true,
      "url": resultado,
      "method": "GET",
      "headers": {
        "cache-control": "no-cache"
      }
    }
    $.ajax(settings1).done(function (response) {
        let salida = JSON.parse(response);
        console.log(salida);
        console.log(salida[0].nombre);
        console.log(salida[0].prediccion);
        let texto = "";
        for(let predDia of salida[0].prediccion.dia){
            texto += (predDia.fecha) + "-";
            texto += (predDia.temperatura.maxima) + "-";
            texto += (predDia.temperatura.minima) + "-";
            texto += (predDia.temperatura.minima);
            texto += "<br />";
        }

        $("#salida").html(texto);
    });
  }