import mysql.connector, sys

class BDVideoJuegos:


    #constructor del objeto para conectar con la base de datos
    def __init__(self):
        self.bdconx = mysql.connector.connect(
                                        host="localhost",
                                        user="videojuegos",
                                        password="videojuegos",
                                        database="videojuegos")
    # fin de constructor


    def todosLosVideojuegos(self):
        
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "SELECT * FROM videojuegosantiguos ORDER BY nombre"


        #ejecutar la consulta
        micursor.execute(consulta)


        #obtener las filas de la consulta y guardar en la variable
        miresultado = micursor.fetchall()


        #traza para ver el objeto miresultado
        sys.stderr.write(str(miresultado)+"\n")


        #cerrar cursor y conexion
        micursor.close()


        #devolver los datos
        return miresultado
    
    def juegosConFiltro(self, filtro):
         #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "SELECT * FROM videojuegosantiguos "+ filtro +" ORDER BY nombre"


        #ejecutar la consulta
        micursor.execute(consulta)


        #obtener las filas de la consulta y guardar en la variable
        miresultado = micursor.fetchall()


        #traza para ver el objeto miresultado
        sys.stderr.write(str(miresultado)+"\n")


        #cerrar cursor y conexion
        micursor.close()


        #devolver los datos
        return miresultado
    
    def borrarJuego(self, id):
         #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "DELETE FROM videojuegosantiguos WHERE id = "+id

        #ejecutar la consulta
        micursor.execute(consulta)

        self.bdconx.commit()

        micursor.close()

    def insertar(self, nombre, empresa, tematica, nJug, anio):
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "INSERT INTO videojuegosantiguos (nombre, empresa, tematica, numero_de_jugadores, publicacion) VALUES (%s, %s, %s, %s, %s)"
        val = (nombre, empresa, tematica, nJug, anio)

        #ejecutar la consulta
        micursor.execute(consulta,val)

        self.bdconx.commit()

        #cerrar cursor y conexion
        micursor.close()

    def seleccionarPorId(self,id):
         #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "SELECT * FROM videojuegosantiguos WHERE id = "+id
        sys.stderr.write("=================="+consulta+"=====================")

        #ejecutar la consulta
        micursor.execute(consulta)


        #obtener las filas de la consulta y guardar en la variable
        miresultado = micursor.fetchone()

        #cerrar cursor y conexion
        micursor.close()


        #devolver los datos
        return miresultado

    def modificar(self, id, nombre, empresa, tematica, nJug, anio):
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "UPDATE videojuegosantiguos SET nombre = %s,empresa = %s,tematica = %s,numero_de_jugadores = %s,publicacion = %s  WHERE id = %s"
        val = (nombre, empresa, tematica, nJug, anio, id)

        #ejecutar la consulta
        micursor.execute(consulta,val)

        self.bdconx.commit()

        #cerrar cursor y conexion
        micursor.close()

    
    def cerrarBD(self):
        self.bdconx.close()
        
