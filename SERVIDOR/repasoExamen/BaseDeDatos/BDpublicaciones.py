import mysql.connector, sys

class BDPublicaciones:


    #constructor del objeto para conectar con la base de datos
    def __init__(self):
        self.bdconx = mysql.connector.connect(
                                        host="localhost",
                                        user="publicaciones",
                                        password="publicaciones",
                                        database="publicaciones")
        
    def todasLasPublicaciones(self):
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()


        #crear el texto de la consulta
        consulta = "SELECT * FROM comentario"

        micursor.execute(consulta)

        miresultado = micursor.fetchall()

        micursor.close()

        return miresultado

    def borrar(self,id):
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()

        #crear el texto de la consulta
        consulta = "DELETE FROM comentario WHERE id_comentario="+id

        micursor.execute(consulta)

        self.bdconx.commit()

        micursor.close()
    
    def cerrarBD(self):
        self.bdconx.close()
