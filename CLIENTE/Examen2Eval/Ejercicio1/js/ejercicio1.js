onload = inicio();

function inicio(){
    let cuerpo = $("body")

    let titulo = $("<h2>").append("Ventas por mes");

    let subtitulo = $("<h4>").text("Informe Semestral");

    let tabla = $("<table>")

    let cabezaTabla = $("<thead>")

    let filaCabeza = $("<tr>")
    
    let celdaMes = $("<td>").text("Mes")
    let celdaVentas = $("<td>").text("Ventas")
    filaCabeza.append(celdaMes, celdaVentas);

    cabezaTabla.append(filaCabeza)

    //crear tbody con id cuerpoTabla
    let cuerpoTabla = $("<tbody>");
    cuerpoTabla.attr("id", "cuerpoTabla")
    //Aqui se crea la fila 1
    let fila1 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC1 = $("<td>").text("Enero");
    let celdaVentasC1 = $("<td>").text("10.325 €");

    fila1.append(celdaMesC1, celdaVentasC1)

    //Aqui se crea la fila 2

    let fila2 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC2 = $("<td>").text("Febrero");
    let celdaVentasC2 = $("<td>").text("9.188 €");

    fila2.append(celdaMesC2, celdaVentasC2)

    //Aqui se crea la fila 3

    let fila3 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC3 = $("<td>").text("Marzo");
    let celdaVentasC3 = $("<td>").text("11.987 €");

    fila3.append(celdaMesC3, celdaVentasC3)

    //Aqui se crea la fila 4

    let fila4 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC4 = $("<td>").text("Abril");
    let celdaVentasC4 = $("<td>").text("7.625 €");

    fila4.append(celdaMesC4, celdaVentasC4)

    //Aqui se crea la fila 5

    let fila5 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC5 = $("<td>").text("Mayo");
    let celdaVentasC5 = $("<td>").text("12.967 €");

    fila5.append(celdaMesC5, celdaVentasC5)

    //Aqui se crea la fila 6

    let fila6 = $("<tr>")

    //crear las celdas con su texto
    let celdaMesC6 = $("<td>").text("Junio");
    let celdaVentasC6 = $("<td>").text("11.134 €");

    fila6.append(celdaMesC6, celdaVentasC6)

    //añadir al tbody las filas
    cuerpoTabla.append(fila1, fila2, fila3, fila4, fila5, fila6)

    //añadir a la tabla el thead y tbody
    tabla.append(cabezaTabla, cuerpoTabla)

    //añadir al body el titulo, subtitulo, tabla
    cuerpo.append(titulo ,subtitulo, tabla)
}