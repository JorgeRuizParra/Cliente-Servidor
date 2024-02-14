onload = inicio()

function inicio(){
    //crear los valores de X que son los meses
    const xValues = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //crear los datos de temperatura y lluvias para despues anadirlos en el datasets
    const temperaturas = [8, 9, 11, 14, 17, 20, 22, 21, 19, 15, 11, 8];
    const lluvias = [20, 25, 30, 45, 55, 60, 20, 25, 40, 70, 60, 30];
    

    myChart = new Chart("grafico", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "temperaturas",
            backgroundColor: "blue",
            //aqui van los datos de temperaturas
            data: temperaturas
          },
          {
            label: "lluvias",
            backgroundColor: "red",
            //aqui van los datos de lluviass
            data: lluvias
          }
        ]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "Temperaturas y lluvias mensuales durante el año 2023"
        }
    }
    });
}
