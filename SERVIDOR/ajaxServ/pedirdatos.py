#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import mysql.connector
import sys, json

sys.stderr.write("Dentro del pedirdatos.py\n")

#crear la conexion a la base de datos
midb = mysql.connector.connect(
    host="localhost",
    user="pruebaAjax",
    password="pruebaAjax",
    database="pruebaAjax"
)

#crear un cursor para hacer la consulta
micursor = midb.cursor()

#crear el texto de la consulta
consulta = "SELECT * FROM datos"

#ejecutar la consulta
micursor.execute(consulta)

#obtener las filas de la consulta y guardar en la variable
miresultado = micursor.fetchall()

#traza para ver el objeto mi resultado
sys.stderr.write(str(miresultado)+"\n")

micursor.close()
midb.close()

print("Content-type: application/json\n")

print(json.dumps(miresultado))

sys.stderr.write("Fin del pedirdatos.py\n")