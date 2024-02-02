$(inicio);

function inicio() {

 const cnv = $("#misBarras");


 const datos = {
 	labels:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
 	datasets:[
 		    {
                label: "Datos de azul",
                //data:[2,3,4,1,3,4,1],
 			    data:[
                    {
                        x:0,
                        y:1
                    },
                    {
                        x:1,
                        y:1
                    },
                    {
                        x:1,
                        y:2
                    },
                    {
                        x:2,
                        y:2
                    },
                    {
                        x:2,
                        y:3
                    }
                    ,{
                        x:3,
                        y:3
                    }
                    ,{
                        x:3,
                        y:4
                    }
                ],
                borderWidth: 1,
                backgroundColor: "#23EDF755",
                borderColor: 'skyblue',
                hoverBackgroundColor: "#23EDF7"
 		    },
            {
                label: "Datos de rosa",
                //data:[2,3,4,1,3,4,1],
                data:[
                    {
                        x:1,
                        y:1
                    },
                    {
                        x:2,
                        y:2
                    },
                    {
                        x:3,
                        y:3
                    },
                    {
                        x:4,
                        y:4
                    },
                    {
                        x:1,
                        y:3
                    }
                    ,{
                        x:2,
                        y:4
                    }
                    ,{
                        x:3,
                        y:4
                    }
                ],
                borderWidth: 2,
                backgroundColor: "#FB44E855",
                borderColor: 'pink',
                hoverBackgroundColor: "#FB44E8"
            },
            {
                label: "Datos de naranja",
                //data:[3,2,2,2,1,1,4],
                data:[
                    {
                        x:0,
                        y:0
                    },
                    {
                        x:0,
                        y:2
                    },
                    {
                        x:1,
                        y:2
                    },
                    {
                        x:4,
                        y:2
                    },
                    {
                        x:1,
                        y:3
                    }
                    ,{
                        x:3,
                        y:1
                    }
                    ,{
                        x:3,
                        y:2
                    }
                ],
                borderWidth: 3,
                backgroundColor: "#FE8B1655",
                borderColor: 'orange',
                hoverBackgroundColor: "#FE8B16"
            },
 		]
 };

 new Chart(cnv,{
 	type:"scatter", //bar,pie,line,scatter  -- bubble,doughnut,polarArea,radar
 	data: datos,
 	options:{
        indexAxis: 'x',
    }
 })

}