#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import os

from urllib.parse import urlparse, parse_qs

import codigoHtml

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

prod = param["producto"][0]
cant = param["cantidad"][0]

fich = open("datos/listaCompra.dat", "at")

if os.path.getsize("datos/listaCompra.dat") != 0:
    fich.write("\n")

fich.write(prod+";"+cant)

fich.close()

codigoHtml.htmlRecarga()