#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

import os

from urllib.parse import urlparse, unquote, parse_qs

from BDpublicaciones import BDPublicaciones
import codigoHtml

print("Content-type: text/html\n")

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

bd = BDPublicaciones()

if "id_comentario" in param and param["id_comentario"][0]!="":
    id = param["id_comentario"][0]

    bd.borrar(id)

codigoHtml.salidaPrincipal(bd.todasLasPublicaciones())

bd.cerrarBD()



