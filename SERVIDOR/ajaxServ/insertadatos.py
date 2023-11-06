#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import mysql.connector
import sys, json, os

from urllib.parse import urlparse, parse_qs

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

t = param["texto"][0]
n = param["numero"][0]

sys.stderr.write("Dentro del insertadatos.py\n")

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
insercion = f"INSERT  INTO datos (dato1,dato2) VALUES('{t}','{n}')"

#obligatorio el commit
midb.commit()

#ejecutar la consulta
micursor.execute(insercion)

micursor.close()
midb.close()

print("Content-type: application/json\n")

print(json.dumps("ok"))

sys.stderr.write("Fin del insertadatos.py\n")