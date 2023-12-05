#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import os

from urllib.parse import urlparse, parse_qs

print("Content-type: text/html\n")

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

precio_corte = param["precio_corte"][0]


fichProd = None
fichPre = None

try: 
    #abrir el fichero en modo lectura
    fichProd = open("productos.txt")

    #abrir el fichero en modo lectura
    fichPre = open("precios.txt")
except:
    #se crea el fichero productos si da error al abrir
    fichProd = open("productos.txt", "x")

    #se crea el fichero precios si da error al abrir
    fichProd = open("precios.txt", "x")

#leemos el contenido de los ficheros
if os.path.getsize("productos.txt") != 0:
    productos = fichProd.readlines()
if os.path.getsize("precios.txt") != 0:
    precios = fichPre.readlines()
else:
    print("algun fichero esta vacio")


#cerrar el fichero
fichProd.close()
fichPre.close()

#funcion que crea una lista ordenada con los productos
def listaDeProductos():
    if len(productos) != 0:#si hay productos se crea la lista
        print("<ol>")
        for p in productos:
            elem = p.split(" ")
            print(f"<li>{elem[0]}</li>")
        print("</ol>")
    print("<hr />")

listaDeProductos()