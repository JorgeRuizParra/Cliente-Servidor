def cabeceraHTML():
    cab = '''<!DOCTYPE html>
    <html>  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">


        <title>Videojuegos Antiguos</title>


        <!-- Latest compiled and minified CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        

    </head>
    <body>
    '''
    print(cab)


def finHTML():
    fin = """
    </body>
    </html>
    """
    print(fin)


def finHTML():
    fin = """
    </body>
    </html>
    """
    print(fin)


def salidaPrincipal(listaVideojuegos):
    cabeceraHTML()
    contenidoIni = '''<div class="row mt-3">


                        <div class="col-3">
                            <h3>Filtros</h3>
                            <a class="m-3 btn btn-secondary" href="principal.py">Ver Todos</a>
                            <form action="filtros.py"  class="m-3">
                            <div>
                                <label for="empresa" class="form-label">Empresa</label>
                                <input type="text" class="form-control" name="empresa">

                                <label for="tematica" class="form-label">Tematica</label>
                                <input type="text" class="form-control" name="tematica">

                                <label for="numero_de_jugadores" class="form-label">N Jugadores</label>
                                <input type="text" class="form-control" name="numero_de_jugadores">

                                <label for="anioInicial" class="form-label">Desde el año</label>
                                <input type="text" class="form-control" name="anioInicial">

                                <label for="anioFinal" class="form-label">Hasta el año</label>
                                <input type="text" class="form-control" name="anioFinal">
                            </div>
                            <button class="mt-3 btn btn-secondary">Filtrar</button>
                        </form>
                        </div>


                        <div class="col-6 bg-secondary text-light text-center">      
                            <h1 class="display-1">Videojuegos Antiguos</h1>
                    '''
   
    tabla='<table class="table table-striped">'


    tabla += "<tr><th>Nombre</th><th>Empresa</th><th>Temática</th><th>Número de jugadores</th><th>Año de publicación</th><th></th></tr>"


    for datosVideojuego in listaVideojuegos:
        fila = "<tr><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>"
        borrado = "<a class='btn btn-danger' href='borrar.py?id="+str(datosVideojuego[0])+"'>Borrar</a>"
        tabla += fila.format(datosVideojuego[1],datosVideojuego[2],datosVideojuego[3],datosVideojuego[4],datosVideojuego[5],borrado)
    tabla += "</table>"


    contenidoFin = ''' </div>


                        <div class="col-3"></div>

                    </div>'''
   
    print(contenidoIni)


    print(tabla)


    print(contenidoFin)
    finHTML()
