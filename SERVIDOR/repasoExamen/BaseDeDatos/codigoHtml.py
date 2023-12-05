def cabecera():
    print('''
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>  
    ''')

def fin():
    print('''
    </body>
    </html>
    ''')

def salidaPrincipal(listaPublicaciones):
    cabecera()
    contenidoIni = '''
                            <h3>Filtros</h3>
                            <a href="principal.py">Ver Todos</a>
                            <form action="filtros.py">
                            <div>
                                <label for="empresa">Empresa</label>
                                <input type="text" name="empresa">

                                <label for="tematica">Tematica</label>
                                <input type="text" name="tematica">

                                <label for="numero_de_jugadores">N Jugadores</label>
                                <input type="text" name="numero_de_jugadores">

                                <label for="anioFinal">Hasta el año</label>
                                <input type="text" name="anioFinal">
                            </div>
                            <button>Filtrar</button>
                        </form>
                        </div>


                        <div>      
                            <h1>Videojuegos Antiguos</h1>
                    '''
   
    tabla='<table>'


    tabla += "<tr><th>id_publicacion</th><th>contenido</th><th>estado_mensaje</th><th></th><th></th></tr>"


    for datosPublicacion in listaPublicaciones:
        fila = "<tr><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>"
        borrado = "<a href='borrar.py?id_comentario="+str(datosPublicacion[0])+"'>Borrar</a>"
        modificar = "<a href='modificarFormulario.py?id="+str(datosPublicacion[0])+"'>Modificar</a>"
        tabla += fila.format(datosPublicacion[1],datosPublicacion[2],datosPublicacion[3],borrado,modificar)
    tabla += "</table>"


    contenidoFin = ''' </div>


                            <a href="insertarFormulario.py">Insertar</a>

                    </div>'''
   
    print(contenidoIni)


    print(tabla)


    print(contenidoFin)
    fin()
