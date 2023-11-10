#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import os

from urllib.parse import urlparse, unquote, parse_qs

from BDvideojuegos import BDVideoJuegos
import HtmlVideoJuegos

print("Content-type: text/html\n")

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

bd = BDVideoJuegos()

if "id" in param and param["id"][0]!="":
    #capturar los datos a borrar
    id = param["id"][0]

    HtmlVideoJuegos.formularioModificar(bd.seleccionarPorId(id))
else:
    HtmlVideoJuegos.error("Falta el id para modificar")

bd.cerrarBD()