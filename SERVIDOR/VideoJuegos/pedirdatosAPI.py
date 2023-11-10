#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

from BDvideojuegos import BDVideoJuegos
import json

##generar salida para el cliente ajax
print("Content-Type: application/json\n")

bd = BDVideoJuegos()

miresultado = bd.todosLosVideojuegos()

print(json.dumps(miresultado))

bd.cerrarBD()