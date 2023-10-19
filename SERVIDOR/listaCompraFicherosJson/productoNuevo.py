#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import os, json

from urllib.parse import urlparse, parse_qs

import codigoHtml

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

prod = [param["producto"][0],param["cantidad"][0]]

if os.path.getsize("datos/listaCompra.dat") == 0:
    listaProductos = [prod]
    listaJson = json.dumps(listaProductos)
else:
    fich = open("datos/listaCompra.dat")
    listaProductos = json.load(fich)
    fich.close()
    listaProductos.append(prod)
    listaJson = json.dumps(listaProductos)
fich = open("datos/listaCompra.dat", "wt")
fich.write(listaJson)

fich.close()

codigoHtml.htmlRecarga()